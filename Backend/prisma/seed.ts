import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Lucas Peres',
      email: 'lucasteste@gmail.com',
      avatarUrl: 'https://github.com/melchior-cmd.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example teste',
      code: 'BOL321',
      ownerId: user.id,
      

      participants: {
        create: {
          userId: user.id,
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-04T12:00:00.764Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-06T12:00:00.764Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          firstTeamPoints: 3,
          secondTeamPoints: 2,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              }
            }
        }
      }
      }
    }
  })
}

main()