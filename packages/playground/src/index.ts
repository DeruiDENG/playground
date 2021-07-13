export function playground() {
  const screenSize = 5.8; // 5.8英寸，屏幕的物理尺寸（对角线长度）
  const width = 375 / 1.6; // 宽度
  const height = 812 / 1.6; // 高度
  const diagonal = Math.sqrt(
    Math.pow(width / 96, 2) + Math.pow(height / 96, 2)
  );
  console.log(screenSize, diagonal); //  5.8 9.316769388595908
}

async function test() {
  const result = await willReject();
  console.log('Ok, working fine.', result);
}

function willReject() {
  return new Promise((resolve, reject) => {
    reject('Rejected.');
  });
}
