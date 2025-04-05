### Markdown notes
- data fetching in vanilla JS
    ```js
    // Predefined Code: Structure already given


    try {
        /    // Function to fetch data from API
    async function fetchData() {/ Your code goes here: Fetch API and extract required data
        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        let response = await data.json();
        
        //extracting what is needed
        let extractedData = response.map(user => ({
            name: user.name,
            email: user.email,
            city: user.address.city,
        }));
        
        console.log(extractedData);
        processUserData(extractedData);
        

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    // Function to process the extracted user data
    function processUserData(users) {
        console.log("Processed User Data:", users);
    }

    // Calling the function to fetch and process data
    fetchData();

    ```