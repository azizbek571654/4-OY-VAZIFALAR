enum UserRole {
    ADMIN,
    EDITOR,
    VIEWER
  }

  function canEdit(role: UserRole): boolean {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
  }
  
  function canDelete(role: UserRole): boolean {
    return role === UserRole.ADMIN;
  }

  function checkPermissions(role: UserRole): void {
    console.log(`Role: ${UserRole[role]}`);
    console.log("Can edit:", canEdit(role));
    console.log("Can delete:", canDelete(role));
    console.log("-----");
  }

  checkPermissions(UserRole.ADMIN);
  checkPermissions(UserRole.EDITOR);
  checkPermissions(UserRole.VIEWER);
  