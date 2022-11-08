var Direction;
(function (Direction) {
    Direction[Direction["LEFT"] = 0] = "LEFT";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["UP"] = 2] = "UP";
    Direction[Direction["DOWN"] = 3] = "DOWN";
})(Direction || (Direction = {}));
var myDirection = Direction.LEFT;
function oneDirection(status) {
    return status === Direction.LEFT;
}
oneDirection(Direction.LEFT);
var Colors;
(function (Colors) {
    Colors["RED"] = "rd";
    Colors["BLUE"] = "bl";
    Colors["GREEN"] = "grn";
    Colors["PINK"] = "pnk";
})(Colors || (Colors = {}));
Colors.RED;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var order = {
    ordernumber: +84156251,
    status: OrderStatus.PENDING
};
var order2 = {
    ordernumber: +84156251,
    status: OrderStatus.DELIVERED
};
