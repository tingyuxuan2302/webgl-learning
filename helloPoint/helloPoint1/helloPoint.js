/*
 * @Description:
 * @Author: 笙痞77
 * @Date: 2023-02-20 20:23:43
 * @LastEditors: 笙痞
 * @LastEditTime: 2023-02-27 22:46:47
 */

// const VSHADER_SOURCE = `
//   void main() {
//     gl_Position = vec4(0.0, 0.0, 0.0, 1.0)
//     gl_PointSize = 10.0
//   }
// `;
// const FSHADER_SOURCE = `
//   void main() {
//     gl_FragColor = vec4(1.0,0.0, 0.0, 1.0 )
//   }
// `;
// 顶点着色器
const VSHADER_SOURCE =
  "void main() {\n" +
  "gl_Position = vec4(0.5, 0.5, 0.0, 1.0);\n" +
  "gl_PointSize = 10.0;\n" +
  "}\n";
// 片元着色器
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
  // 指定清空<canvas>的颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // 黑色
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.POINTS, 0, 1);
}
