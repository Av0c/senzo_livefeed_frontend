export default {
  time:{
    period: {
      DAY: {
        format: "HH:mm",
        code: "day",
        title: "Today so far",
        prevTitle: "Yesterday"
      },
      WEEK: {
        format: "ddd",
        code: "week",
        title: "This week so far",
        prevTitle: "Last week"
      },
      MONTH: {
        format: "MMM",
        code: "month",
        title: "Monthly utilization",
        prevTitle: ""
      },
      CUSTOM: {
        format: "MMM",
        code: "custom",
        title: "Custom timeframe",
        prevTitle: ""
      }
    },
  },
  mode: {
    AVERAGE: {
      code: "average",
      title: "AVERAGE UTILIZATION"
    },
    PEAK: {
      code: "peak",
      title: "PEAK UTILIZATION"
    }
  },
  room: {
    MEETINGROOM: {
      type: "Meeting rooms",
      code: 'meeting_room',
      occupancyTag: 'MRO',
      efficiencyTag: 'MRE'
    },
    WORKINGAREA: {
      type: "Working areas",
      code: 'working_area'
    },
    OPENAREA: {
      type: "Open areas",
      code: "open_area",
      occupancyTag: "OAO"
    },
    ALLAREA: {
      type: "All areas",
      code: 'all_areas',
      occupancyTag: "TTO"
    }
  },
  tag: {
    OCCUPANCY: {
      type: 'Occupancy'
    },
    EFFICIENCY: {
      type: 'Efficiency'
    }
  }
}