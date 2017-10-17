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
  }
}