// src/services/userService.js
export const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  

