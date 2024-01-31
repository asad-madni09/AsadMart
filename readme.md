

Authentication and User Management:

POST /users/signup: Registers a new user with name, email, password, address, and phone number.
POST /users/login: Authenticates a user and returns a JWT token for protected endpoints.
GET /users/me: Gets the currently logged-in user's data (requires valid JWT token).
PUT /users/:id: Updates user information (requires valid JWT token and the user's ID).

Grocery Category and Product Management:

POST /categories: Creates a new grocery category with a name and description.(done)
POST /products: Creates a new product with details like name, description, category, price, image, quantity, etc.(done)
GET /products: Retrieves a list of all products or paginated results based on filters (category, name, etc.).(done)
GET /products/:id: Gets information about a specific product by ID.(done)
