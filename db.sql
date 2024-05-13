CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    "userId" bigint,
        "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,

);