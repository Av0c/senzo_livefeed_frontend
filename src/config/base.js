export default {
  time: {
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
    }
  },
  mode: {
    AVERAGE: {
      code: "Average",
      title: "AVERAGE UTILIZATION"
    },
    PEAK: {
      code: "Peak",
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
  },
  day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  viewFilter: {
    ALL: {
      code: "ALL",
      text: "Show All"
    },
    LIVE: {
      code: "LIVE",
      text: "Live View"
    },
    MAINTENANCE: {
      code: "MAINTENANCE",
      text: "Maintenance View"
    }
  }
}
