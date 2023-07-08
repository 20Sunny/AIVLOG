<p align="center
 img width="180" src="https://aivart.vercel.app/assets/logo-76f396b8.png" alt="AIVANA">
 <h1 align="center">AIVANA - Aivlog</h1>
</p>

Welcome to AIVLOG, a blog application developed under the AIVANA parent company. AIVLOG allows users to upload blogs categorized into five different categories. Users who upload blogs have full CRUD (Create, Read, Update, Delete) operations on their own blogs, while other users can read the blogs, leave comments, and delete their own comments. Additionally, users can set a thumbnail for their blogs in various image formats such as .jpg, .png, .gif, or .svg.

## Features

- User authentication using JSON Web Tokens (JWT)
- Blog upload and categorization
- CRUD operations for blog owners
- Reading and commenting on blogs for other users
- Thumbnail support for blogs (supports .jpg, .png, .gif, .svg formats)
- About page linking to the GitHub README file
- Social media links for connecting with AIVLOG
- Contact form for user feedback and complaints
- Browser script blocking detection with a unique animation

## Installation

1. Clone the repository

 ```
 git clone https://github.com/20Sunny/AIVLOG.git 
 ```


2. Install dependencies:
for Client Folder
```
npm --openssl-legacy-provider install
```
for Server Folder
```
npm install
```

## Usage For Server

1. Set up the required environment variables (e.g., database connection, JWT secret) in a `.env` file in server folder.
```
DB_USERNAME= MongoDB API Username
DB_PASSWORD= MongDB API password
DB_URL= your MongoDB Atlas API
ACCESS_SECRET_KEY=de37bbab03b0380009e4b2f9c6fa6dcf95ae3acfc63125ce7b580d8d490eb6f92579843a4ce44011998dbec04fab568e5de224b042b2c2cf284acfbe03f1f4a6
REFRESH_SECRET_KEY=a60327222ffaa884573490fc0574d69f3f5d1925a98479fb4ef184ebc99fab84cbb9edcc41434b58a07b66188a75152916ed7b46b2031afa5b5c0f046cacb726
```
2. Go to `server/controller/image-controller.js` set `const url` to `https://localhost:8000`
3. Start the development server: `npm start`

## Usage For Client

1. Go to `client/src/service/api.js` set `API_URL` to `https://localhost:8000`
2. Start the developement client: `npm start`

## Contact

If you encounter any issues or have suggestions for improvements, please contact us through the following channels:

- Email: [SunnySharma7601@gmail.com](mailto:Sunnysharma7601@gmail.com)
- Website: [https://aivlog.vercel.app](https://aivlog.vercel.app)
- Social Media: [Github](https://github.com/20sunny) | [Instagram](https://www.instagram.com/aivlog) | [Facebook](https://www.facebook.com/aivlog)

## Browser Script Blocking Animation

AIVLOG has a unique animation that is triggered when the script is blocked in the user's browser. This animation provides a visual cue to users that the website functionality may be limited without JavaScript enabled.

## Screenshots
### login or sign up 
![Login or sin up](https://res.cloudinary.com/dhbyg08yc/image/upload/v1686186091/aivlog.vercel.app_account_iwob96.png)

### Home Page
![home](https://res.cloudinary.com/dhbyg08yc/image/upload/v1686186091/aivlog.vercel.app__csarai.png)

### View Blog
![](https://res.cloudinary.com/dhbyg08yc/image/upload/v1686186091/aivlog.vercel.app_details_647f0104ff6b33be85a0c4ca_lydf5s.png)

### Edit Blog
![](https://res.cloudinary.com/dhbyg08yc/image/upload/v1686186092/aivlog.vercel.app_update_647f0104ff6b33be85a0c4ca_eaa8xw.png)

### New Blog
![](https://res.cloudinary.com/dhbyg08yc/image/upload/v1686186091/aivlog.vercel.app__1_jrpxca.png)

### Contact Page
![](https://res.cloudinary.com/dhbyg08yc/image/upload/v1686186089/aivlog.vercel.app_contact_hcygnc.png)

## Contributing

We welcome contributions to AIVLOG! To Contribute.

## License

This project is licensed under the [MIT License](LICENSE).
