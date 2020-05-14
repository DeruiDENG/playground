export function playground() {
  console.log('This is a playground.');
  test()
    .then(() => console.log('ok'))
    .catch(e => console.log(`Exception:`, e));
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
