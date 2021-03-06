import { events } from './events'
import { users } from './users'
import { bookings } from './bookings'
import { bookEvent } from './bookEvent'
import { cancelBooking } from './cancelBooking'
import { createEvent } from './createEvent'
import { createUser } from './createUser'
import { login } from './login'

export const rootValue = {
    events,
    users,
    bookings,
    createEvent,
    createUser,
    bookEvent,
    cancelBooking,
    login,
    message: () => 'Hello World!',
    add: ({ num1, num2 }) => num1 + num2
}
