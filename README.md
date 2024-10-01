# Book-For-Me: Book Recommender

**Book-For-Me** is a web application that recommends books based on selected genres and page counts. The app fetches book recommendations from an external API and presents them in an intuitive, user-friendly interface. Users can explore book details such as title, author, summary, and reviews.

## Features

- Select book categories (genres) and page counts to filter recommendations.
- Displays book recommendations with title, author, summary, and cover image.
- Responsive and clean UI with easy navigation.
- Integrates with a third-party API for fetching book recommendations.

## Demo

You can view a live demo of the project here: [Link to live demo (if hosted)].

## Technology Stack

- **Frontend:** React.js, Redux Toolkit, React Router
- **API:** RapidAPI for book recommendations
- **Styling:** CSS Grid, Flexbox
- **Build tool:** Create React App

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to Install

1. **Clone the repository:**

```bash
   git clone https://github.com/yourusername/book-for-me.git
   cd book-for-me
```
2. **Install dependencies:**

``` bash
npm install
```
3. **Create a .env file and add your RapidAPI key:**

``` makefile
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
```
4. **Start the development server:**

``` bash
    npm start
```


## Usage

    Select a category (genre) on the homepage.
    Choose a page count range on the next screen.
    View book recommendations based on your selected category and page count.

## API Integration

This app uses the Book Information Library API to fetch book recommendations based on the selected genre (category).
API Request Example


