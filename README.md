# AIVLOG

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

1. Clone the repository: `git clone https://github.com/AIVANA/AIVLOG.git`
2. Install dependencies: `npm install`

## Usage

1. Set up the required environment variables (e.g., database connection, JWT secret) in a `.env` file.
2. Start the development server: `npm run dev`
3. Access the application in your browser at `http://localhost:3000`

## Contributing

We welcome contributions to AIVLOG! To contribute, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -am 'Add your feature'`
4. Push the changes to your forked repository: `git push origin feature/your-feature-name`
5. Open a pull request to the `main` branch of the AIVLOG repository

## Contact

If you encounter any issues or have suggestions for improvements, please contact us through the following channels:

- Email: [contact@aivlog.com](mailto:contact@aivlog.com)
- Website: [www.aivlog.com](https://www.aivlog.com)
- Social Media: [Twitter](https://twitter.com/aivlog) | [Instagram](https://www.instagram.com/aivlog) | [Facebook](https://www.facebook.com/aivlog)

## Browser Script Blocking Animation

AIVLOG has a unique animation that is triggered when the script is blocked in the user's browser. This animation provides a visual cue to users that the website functionality may be limited without JavaScript enabled.

## License

This project is licensed under the [MIT License](LICENSE).
