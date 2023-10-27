export async function getData() {
  try {
    const res = await fetch(`https://jsonblob.com/api/jsonBlob/1166637389820321792`);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
