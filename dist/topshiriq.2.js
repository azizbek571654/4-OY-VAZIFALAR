"use strict";
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["EDITOR"] = 1] = "EDITOR";
    UserRole[UserRole["VIEWER"] = 2] = "VIEWER";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}
function canDelete(role) {
    return role === UserRole.ADMIN;
}
function checkPermissions(role) {
    console.log(`Role: ${UserRole[role]}`);
    console.log("Can edit:", canEdit(role));
    console.log("Can delete:", canDelete(role));
    console.log("-----");
}
checkPermissions(UserRole.ADMIN);
checkPermissions(UserRole.EDITOR);
checkPermissions(UserRole.VIEWER);
