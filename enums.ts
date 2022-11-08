
enum Direction {
LEFT,
RIGHT,
UP,
DOWN
}

const myDirection = Direction.LEFT;

function oneDirection(status: Direction){
    return status === Direction.LEFT
}

oneDirection(Direction.LEFT);

enum Colors {
RED = "rd",
BLUE = "bl",
GREEN = "grn",
PINK = "pnk"
}

Colors.RED

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const order = {
    ordernumber:+84156251,
    status: OrderStatus.PENDING
}
const order2 = {
    ordernumber:+84156251,
    status: OrderStatus.DELIVERED
}
