/*
 * @Description: attribute变量的使用
 * @Author: 笙痞77
 * @Date: 2023-02-20 20:23:43
 * @LastEditors: 笙痞
 * @LastEditTime: 2023-02-27 22:53:12
 */
const VSHADER_SOURCE =
  "attribute vec4 a_Position;\n" +
  "void main() {\n" +
  "gl_Position = a_Position;\n" +
  "gl_PointSize = 10.0;\n" +
  "}\n";

const FSHADER_SOURCE =
  "void main() {\n" + "gl_FragColor = vec4(0.0,1.0, 0.0, 1.0);\n" + "}\n";
function main() {
  const canvas = document.getElementById("webgl-container");
  const gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("fail");
    return;
  }
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log("failed init shaders");
    return;
  }
  /**
   * @description: 获取attribute变量的存储位置
   * program 着色器程序对象
   * name attribute变量的名称
   * @return {*}
   */  
  const a_Position = gl.getAttribLocation(gl.program, "a_Position")
  if (a_Position < 0) {
    // 不存在该变量
    console.log("failed to get location")
    return
  }
  // 将顶点位置传给attribute变量
  gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0)
  // 指定清空<canvas>的颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // 黑色
  // 清空canvas
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
}
