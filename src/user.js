class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  getProfile() {
    return {
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
    };
  }

  isValidEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }
}

module.exports = User;
