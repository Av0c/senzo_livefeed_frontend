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
  nodeType: {
    customer: {
      code: "customer",
      text: "Company"
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
  day: ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"],
  viewFilter: [
    {code: "ALL", text: "Show All"},
    {code: "LIVE", text: "Live View"},
    {code: "MAINTENANCE", text: "Maintenance View"},
  ],
  userTypeFilter: [
    {code:"ALL", text:"All Users"},
    {code:"CADMIN", text:"Company Admins"},
    {code:"LADMIN", text:"Local Admins"},
    {code:"LUSER", text:"Local Users"},
    {code:"SUSER", text:"Support Users"}
  ],
  sensorStatusFilter: [
    {code:"ALL", text:"All sensors"},
    {code:"ONLINE", text:"Online sensors"},
    {code:"MAINTENANCE", text:"Offline sensors"},
    // {code:"UNREG", text:"Unregistered sensors"},
  ],
  roles: [
    {code:"!ADMIN", rolecode:"ADMIN", text:"Company administrator", singular: "a company administrator"},
    {code:".ADMIN", rolecode:"ADMIN", text:"Local administrator", singular: "a local administrator"},
    {code:".LOCALUSER", rolecode:"LOCALUSER", text:"Local user", singular: "a local user"},
    {code:".SUPPORTUSER", rolecode:"SUPPORTUSER", text:"Support user", singular: "a support user"}
  ],
}
