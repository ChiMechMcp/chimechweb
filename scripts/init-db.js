const mysql = require('mysql2/promise')
const bcrypt = require('bcryptjs')

const dbConfig = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'chimech'
}

async function initDatabase() {
  let connection
  
  try {
    console.log('Connecting to database...')
    connection = await mysql.createConnection(dbConfig)
    console.log('Database connected successfully!')

    // Create users table
    console.log('Creating users table...')
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        role ENUM('admin', 'user') DEFAULT 'user',
        avatar VARCHAR(255),
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `
    await connection.execute(createUsersTable)
    console.log('Users table created successfully!')

    // Create sessions table
    console.log('Creating sessions table...')
    const createSessionsTable = `
      CREATE TABLE IF NOT EXISTS sessions (
        id VARCHAR(255) PRIMARY KEY,
        user_id INT NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `
    await connection.execute(createSessionsTable)
    console.log('Sessions table created successfully!')

    // Create admin user
    console.log('Creating admin user...')
    const adminPassword = await bcrypt.hash('admin123', 12)
    const createAdminUser = `
      INSERT IGNORE INTO users (username, email, password_hash, first_name, last_name, role)
      VALUES (?, ?, ?, ?, ?, ?)
    `
    await connection.execute(createAdminUser, [
      'admin',
      'admin@chimech.com',
      adminPassword,
      'Admin',
      'User',
      'admin'
    ])
    console.log('Admin user created successfully!')

    // Create test user
    console.log('Creating test user...')
    const testPassword = await bcrypt.hash('test123', 12)
    const createTestUser = `
      INSERT IGNORE INTO users (username, email, password_hash, first_name, last_name, role)
      VALUES (?, ?, ?, ?, ?, ?)
    `
    await connection.execute(createTestUser, [
      'testuser',
      'test@chimech.com',
      testPassword,
      'Test',
      'User',
      'user'
    ])
    console.log('Test user created successfully!')

    console.log('\n✅ Database initialization completed successfully!')
    console.log('\nTest accounts:')
    console.log('1. Admin: admin@chimech.com / admin123')
    console.log('2. User: test@chimech.com / test123')

  } catch (error) {
    console.error('Database initialization failed:', error)
    process.exit(1)
  } finally {
    if (connection) {
      await connection.end()
    }
  }
}

// Run the initialization
initDatabase() 