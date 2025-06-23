-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  avatar TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 创建会话表
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 创建管理员用户（密码：admin123）
INSERT OR IGNORE INTO users (username, email, password_hash, first_name, last_name, role)
VALUES ('admin', 'admin@chimech.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/GoYB/nZHe', 'Admin', 'User', 'admin');

-- 创建测试用户（密码：test123）
INSERT OR IGNORE INTO users (username, email, password_hash, first_name, last_name, role)
VALUES ('testuser', 'test@chimech.com', '$2a$12$xHbnRv0Y/bq1LXgdvE3UWW9QI8fwQu7LGKGF6jKj5rALnWXYMQLFO', 'Test', 'User', 'user'); 