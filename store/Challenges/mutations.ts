import { Mutations, MutationsInterface } from './types'

export default {
  [Mutations.SET_CURRENT_CHALLENGE_INDEX] (state, index) {
    state.currentChallengeIndex = index
  },
  [Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (state, flag) {
    state.isLevelUpModalOpen = flag
  },
  [Mutations.COMPLETE_CHALLENGE] (state, xpAmount) {
    const { current, end } = state.xp
    const shauldLevelUp = (xpAmount + current) >= end

    state.completedChallenges += 1

    if (shauldLevelUp) {
      state.level += 1

      const remainningXp = (xpAmount + current) - end
      const experienceToNextLevel = Math.pow((state.level + 1) * 4, 2)

      state.xp = {
        current: remainningXp,
        start: 0,
        end: experienceToNextLevel
      }

      state.isLevelUpModalOpen = true
      return
    }

    state.xp = {
      ...state.xp,
      current: current + xpAmount
    }
  },
  [Mutations.SAVE_COOKIE_DATA] (state, cookie) {
    state.level = cookie.level
    state.xp = cookie.xp
    state.completedChallenges = cookie.completedChallenges
  }
} as MutationsInterface
