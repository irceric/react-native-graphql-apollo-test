import axios from 'axios'
import { useQuery } from '@apollo/client'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import { queries } from 'App/Queries'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */
const userApiClient = axios.create({
  /**
   * Import the config from the App/Config/index.js file
   */
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser() {
  // Simulate an error 50% of the time just for testing purposes
  if (Math.random() > 0.5) {
    return new Promise(function(resolve, reject) {
      resolve(null)
    })
  }

  let number = Math.floor(Math.random() / 0.1) + 1

  return userApiClient.get(number.toString()).then((response) => {
    if (in200s(response.status)) {
      return response.data
    }

    return null
  })
}

const fetchSingleUser = (id) =>
  useQuery(queries.GET_USER, {
    variables: {
      id: id,
      todoOptions: {
        paginate: {
          page: 1,
          limit: 3,
        },
      },
    },
  })

const fetchUsers = (currentPage) =>
  useQuery(queries.GET_USERS, {
    variables: {
      options: {
        paginate: {
          page: currentPage,
          limit: 5,
        },
      },
      todoOptions: {
        paginate: {
          page: 1,
          limit: 3,
        },
      },
    },
  })

export const userService = {
  fetchUser,
  fetchSingleUser,
  fetchUsers,
}
