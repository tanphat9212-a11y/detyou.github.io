/// PATH: data/users.js

const users = [
  {
    id: 1,
    username: "nguyenvana",
    fullName: "Nguyễn Văn A",
    email: "vana@gmail.com",
    phone: "0901234567",
    avatar: "assets/images/avatar/default.png",
    role: "customer",
    status: "active",
    addresses: [
      {
        id: 1,
        name: "Nguyễn Văn A",
        phone: "0901234567",
        address: "Bến Tre, Việt Nam",
        isDefault: true
      }
    ],
    createdAt: "2026-06-10T08:00:00"
  },
  {
    id: 2,
    username: "tranthib",
    fullName: "Trần Thị B",
    email: "tranb@gmail.com",
    phone: "0912345678",
    avatar: "assets/images/avatar/default.png",
    role: "customer",
    status: "active",
    addresses: [
      {
        id: 1,
        name: "Trần Thị B",
        phone: "0912345678",
        address: "TP. Hồ Chí Minh, Việt Nam",
        isDefault: true
      }
    ],
    createdAt: "2026-06-15T09:30:00"
  },
  {
    id: 3,
    username: "admin",
    fullName: "Admin SHOPVN",
    email: "admin@shopvn.com",
    phone: "0999999999",
    avatar: "assets/images/avatar/default.png",
    role: "admin",
    status: "active",
    addresses: [
      {
        id: 1,
        name: "Admin",
        phone: "0999999999",
        address: "Hà Nội, Việt Nam",
        isDefault: true
      }
    ],
    createdAt: "2026-01-01T00:00:00"
  },
  {
    id: 4,
    username: "lethic",
    fullName: "Lê Thị C",
    email: "lethi@gmail.com",
    phone: "0934567890",
    avatar: "assets/images/avatar/default.png",
    role: "customer",
    status: "inactive",
    addresses: [
      {
        id: 1,
        name: "Lê Thị C",
        phone: "0934567890",
        address: "Đà Nẵng, Việt Nam",
        isDefault: true
      }
    ],
    createdAt: "2026-06-20T14:10:00"
  },
  {
    id: 5,
    username: "phamvand",
    fullName: "Phạm Văn D",
    email: "phamd@gmail.com",
    phone: "0945678901",
    avatar: "assets/images/avatar/default.png",
    role: "customer",
    status: "active",
    addresses: [
      {
        id: 1,
        name: "Phạm Văn D",
        phone: "0945678901",
        address: "Cần Thơ, Việt Nam",
        isDefault: true
      }
    ],
    createdAt: "2026-06-25T16:45:00"
  }
];

export default users;