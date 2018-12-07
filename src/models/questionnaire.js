const getQuestionnaire = q => ({
  meta: {
    currentStepId: 'ABOUT',
  },
  user: {
    name: '',
    email: '',
  },
  answers: {
    occupationRole: [],
    occupationCompany: '',
    occupationPlan: '',
    hobbyThisYear: '',
    hobbyThisYearPlan: '',
    wantToLearn: '',
    wantToLearnPlan: '',
    placeToVisit: '',
    placeToVisitPlan: '',
    betterYourHealth: '',
    betterYourHealthPlan: '',
    betterYourCommunity: '',
    betterYourCommunityPlan: '',
  },
})

export { getQuestionnaire }
