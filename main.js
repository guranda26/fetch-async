function repeatFunc(str, x, cb) {
  if (x === 0) return str;
  return repeatFunc(cb(str), x - 1, cb);
}

const a = repeatFunc("Guranda", 3, (res) => `? ${res} ?`);
console.log(a);

function repo(num, deg, callback) {
  if (deg === 0) return 1;
  if (deg === 1) return num;
  return callback(num) * repo(num, deg - 1, callback);
}

const number = repo(5, 3, (n) => n);
console.log(number);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function fetchData() {
//   try {
//     const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!rawData.ok) {
//       throw new Error(`HTTP error! status: ${rawData.status}`);
//     }
//     const data = await rawData.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// fetchData();
function userCard(title) {
  const section = document.createElement("section");
  const heading = document.createElement("h1");
  heading.textContent = title;

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-13-at-10.23.39-AM.png"
  );
  section.append(heading, img);
  document.body.append(section);
}
async function fetchData() {
  try {
    const rawData = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!rawData.ok) {
      throw Error(`HTTP error! status: ${rawData.status}`);
    }
    const data = await rawData.json();
    data.forEach((u) => {
      const user = userCard(u.title);
      // document.body.append(user);
      return user;
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

async function deepCopy(obj) {
  return new Promise(async (resolve, reject) => {
    try {
      const copiedObj = JSON.parse(JSON.stringify(obj));
      resolve(copiedObj);
    } catch (error) {
      reject(new Error("Error occured"));
    }
  });
}

const obj = { age: 24, name: { nickName: "JM" } };

async function copied() {
  try {
    const copiedObj = await deepCopy(obj);
    if (typeof obj !== "object" || typeof obj == "null") {
      console.error(new Error("not an object"));
    }
    console.log("Success:", copiedObj);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

copied();
