const COHORT_NAME = "2304-FTB-ET-WEB-FT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//fetch posts
export const getAllPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const translatedData = await response.json();
        return translatedData.data.posts;
    } catch (error) {
        console.log(error);
    }
};


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();
  
    return result.data;
  } catch (error) {
    console.log(error);
  }
};