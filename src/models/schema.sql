CREATE TABLE [candidates] (
	[id] INTEGER PRIMARY KEY,
	[name] TEXT NOT NULL,
    [email] TEXT NOT NULL,
    [password] TEXT,
    [audio_path] TEXT
);
CREATE TABLE [admin_users] (
	[id] INTEGER PRIMARY KEY,
	[name] TEXT NOT NULL,
	[email] TEXT NOT NULL,
    [password] TEXT NOT NULL
);     
CREATE TABLE [questions] (
	[id] INTEGER PRIMARY KEY,
	[title] TEXT NOT NULL,
	[question] TEXT NOT NULL,
	[options] TEXT NOT NULL,
    [answer] TEXT NOT NULL,
    [time] INTEGER NOT NULL
);
CREATE TABLE [question_sets] (
	[id] INTEGER PRIMARY KEY,
	[title] TEXT NOT NULL,
	[questions] TEXT NOT NULL,
    [time] INTEGER NOT NULL,
    [score] INTEGER NOT NULL
);