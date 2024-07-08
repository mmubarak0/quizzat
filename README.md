# Quizzat
Quizzat is a simple quiz app that allows you to create and play quizzes.

## Technologies
![image](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## API Endpoints
### Quizzes
- `GET /api/quizzes` - Get all quizzes.
- `GET /api/quizzes/:id` - Get a quiz by id.
- `POST /api/quizzes` - Create a new quiz.
### Questions
- `POST /api/quizzes/:quizId/questions` - Create a new question for a quiz.
### Answers
- `POST /api/quizzes/:quizId/questions/:questionId/answers` - Create a new answer for a question.
### Users
- `GET /api/users` - Get all users.
- `GET /api/users/:id` - Get a user by id.
- `POST /api/users` - Create a new user.
### Responses: 
- `GET /api/quizzes/:id`:
```json
[
    {
        "id": "1", // not null, unique
        "name": "Quiz 1", // not null
        "description": "This is a quiz",
        "thumbnail": "https://example.com/image.jpg",
        "tags": ["tag1", "tag2"],
        "level": "easy", // default: "easy", enum: ["easy", "medium", "hard"]
        "createdBy": { "userId": "1" }, // not null
        "createdAt": "2021-10-10T10:00:00.000Z", // not null
        "started": 20, // default: 0
        "finished": 10, // default: 0
        "averageScore": 50,
        "lowestScore": 10,
        "highestScore": 100,
        "topThreeScores": [
            {
                "userId": "1",
                "score": 100
            }
        ],
        "topTenScores": [
            {
                "userId": "1",
                "score": 100
            }
        ],
        "leaderBoard": [
            {
                "userId": "1",
                "score": 100
            }
        ],
        "stared_by": ["1", "2"],
        "questions": [
            {
                "id": "1", // not null, unique
                "content": "Question 1", // not null
                "type": "multiple-choice", // default: "multiple-choice", enum: ["single-choice", "multiple-choice", "true-false"]
                "answers": [
                    {
                        "id": "1", // not null, unique
                        "content": "Answer 1", // not null
                        "correct": true
                    },
                    {
                        "id": "2",
                        "title": "Answer 2",
                        "correct": false
                    }
                ]
            }
        ]
    }
]
```

## TODO List
- [ ] Create a quiz with multiple questions and answers.
- [ ] Play a quiz.
- [ ] View the results of a quiz.
- [ ] User authentication.
- [ ] User status and/or profile.
- [ ] Leaderboard.
- [ ] Share quizzes.
- [ ] Search for quizzes.
- [ ] Tags for quizzes.



## Authors
> developers:

- [SaiAI](https://github.com/saiAl)
- [mubarak](https://github.com/mmubarak0)

> designers:

- [Ali](https://portfolio.ali.com)
