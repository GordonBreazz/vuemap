export default
    {   
        summerTimetable: {
            fromMonth: 6,
            toMonth: 8,
            title: 'Летнее расписание'
        },        
        winterTimetable: {
            fromMonth: 9,
            toMonth: 5,
            title: 'Зимнее расписание'    
        },
        scheduleTypes: [
            {   // Расписание большинства библиотек - 0
                libraries: [4, 5, 9, 12, 18, 19, 24],
                summerTime: [
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание  большинства библиотек зимнее
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ]
            },
            {   //  Расписание ЦГБ - 1
                libraries: [1],
                summerTime: [
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ],
                winterTime: [ //  Расписание ЦГБ зимнее
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ]
            },
            {   //Расписание библиотеки подтип 2 - 2
                libraries: [2, 10, 15, 16, 21],
                summerTime: [
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ],
                winterTime: [ //Расписание библиотеки подтип 2 зимнее
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ]
            },
            {   // Расписание библиотеки №3 - 3
                libraries: [3],
                summerTime: [
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание библиотеки №3 зимнее
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ]
            },

            {   // Расписание библиотеки №6 - 4
                libraries: [6],
                summerTime: [
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание библиотеки №6 зимнее
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ]
            },
            {   // Расписание библиотеки №13 - 5
                libraries: [13],
                summerTime: [
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание библиотеки №13
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 19,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Суббота
                    }
                ]
            },
            {   // Расписание библиотеки №17 - 6
                libraries: [17],
                summerTime: [
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание библиотеки №17 
                    {
                        openTime: 10,
                        closeTime: 18,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ]
            },
            {   // Расписание библиотеки №20 - 7
                libraries: [20],
                summerTime: [
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание библиотеки №20
                    {
                        openTime: 0,
                        closeTime: 0,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 9,
                        closeTime: 18,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 9,
                        closeTime: 17,
                        dayoff: false
                        // Суббота
                    }
                ]
            },

            {   // Расписание мобильной точки в ТЦ Форум - 8
                libraries: [20],
                summerTime: [
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Воскресенье
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Суббота
                    }
                ],
                winterTime: [ // Расписание мобильной точки в ТЦ Форум - 8
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: true
                        // Воскресенье
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Понедельник
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Вторник
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Среда
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Четверг
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Пятница
                    },
                    {
                        openTime: 10,
                        closeTime: 20,
                        dayoff: false
                        // Суббота
                    }
                ]
            },            



        ]

    }                