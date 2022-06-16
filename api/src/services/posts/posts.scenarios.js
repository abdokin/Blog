export const standard = defineScenario({
  post: {
    one: {
      data: {
        title: 'String',
        content: 'String',
        author: {
          create: {
            email: 'String6063742',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        title: 'String',
        content: 'String',
        author: {
          create: {
            email: 'String4602443',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
