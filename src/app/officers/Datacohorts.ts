/*

----------- DATAcohorts.ts
This file organizes all officers by their cohorts for the cohort sections.

*/

import { eboard } from './DATAeboard'
import { careerdev } from './DATAcareerdev'
import { finance } from './DATAfinance'
import { internal } from './DATAinternal'
import { profrel } from './DATAprofrel'
import { marketing } from './DATAmarketing'
import { actives } from './DATAactives'
import { allofficers } from './DATAallofficers'
import OfficerType from '@/app/models/IOfficerType'

// Combine all officers into one array
const allOfficers = [
  ...allofficers
]

// Function to organize officers by cohort
const organizeByCohort = () => {
  const cohortMap: { [key: string]: OfficerType[] } = {}

  allOfficers.forEach((officer) => {
    const cohort = officer.cohort
    if (!cohortMap[cohort]) {
      cohortMap[cohort] = []
    }
    cohortMap[cohort].push(officer)
  })

  return cohortMap
}

const cohortMap = organizeByCohort()

// Define the order of cohorts (most recent first)
const cohortOrder = [
  'Fall 2025 Cohort',
  'Spring 2025 Cohort',
  'Fall 2024 Cohort',
  'Spring 2024 Cohort',
  'Fall 2023 Cohort',
  'Spring 2023 Cohort',
  'Fall 2022 Cohort',
  'Founding Cohort',
]

// Export organized cohorts in order
export const cohorts = cohortOrder
  .filter(cohortName => cohortMap[cohortName]) // Only include cohorts that have officers
  .map(cohortName => ({
    name: cohortName,
    officers: cohortMap[cohortName],
  }))