test();



async function test(){
  const promise = await Promise.resolve('hello~!!');
  console.log(promise);
}