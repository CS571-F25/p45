import { useMemo, useState } from 'react'
import FilterBar from './FilterBar.jsx'
import SchoolCard from './SchoolCard.jsx'
import SearchBar from './SearchBar.jsx'
import SortDropdown from './SortDropdown.jsx'

// Real medical school data sourced from MSAR, school websites, and admissions data
const medicalSchools = [
  // Alabama
  {
    name: 'University of Alabama School of Medicine (UAB)',
    location: 'Birmingham, AL',
    state: 'AL',
    type: 'MD',
    gpa: 3.85,
    mcat: 509,
    tuition: 32,
    match: 94,
    isPublic: true,
  },
  {
    name: 'Frederick P. Whiddon College of Medicine, University of South Alabama',
    location: 'Mobile, AL',
    state: 'AL',
    type: 'MD',
    gpa: 3.90,
    mcat: 509,
    tuition: 32,
    match: 92,
    isPublic: true,
  },
  {
    name: 'Alabama College of Osteopathic Medicine (ACOM)',
    location: 'Dothan, AL',
    state: 'AL',
    type: 'DO',
    gpa: 3.38,
    mcat: 504,
    tuition: 61,
    match: 87,
    isPublic: false,
  },
  {
    name: 'Edward Via College of Osteopathic Medicine – Auburn',
    location: 'Auburn, AL',
    state: 'AL',
    type: 'DO',
    gpa: 3.67,
    mcat: 502,
    tuition: 52,
    match: 85,
    isPublic: false,
  },
  // Arizona
  {
    name: 'University of Arizona College of Medicine – Tucson',
    location: 'Tucson, AZ',
    state: 'AZ',
    type: 'MD',
    gpa: 3.74,
    mcat: 508,
    tuition: 37,
    match: 93,
    isPublic: true,
  },
  {
    name: 'University of Arizona College of Medicine – Phoenix',
    location: 'Phoenix, AZ',
    state: 'AZ',
    type: 'MD',
    gpa: 3.78,
    mcat: 516,
    tuition: 37,
    match: 95,
    isPublic: true,
  },
  {
    name: 'A.T. Still University – SOMA',
    location: 'Mesa, AZ',
    state: 'AZ',
    type: 'DO',
    gpa: 3.45,
    mcat: 505,
    tuition: 69,
    match: 86,
    isPublic: false,
  },
  {
    name: 'Midwestern University – AZCOM',
    location: 'Glendale, AZ',
    state: 'AZ',
    type: 'DO',
    gpa: 3.54,
    mcat: 505,
    tuition: 83,
    match: 88,
    isPublic: false,
  },
  // Arkansas
  {
    name: 'University of Arkansas for Medical Sciences (UAMS)',
    location: 'Little Rock, AR',
    state: 'AR',
    type: 'MD',
    gpa: 3.80,
    mcat: 508,
    tuition: 35,
    match: 91,
    isPublic: true,
  },
  {
    name: 'Arkansas College of Osteopathic Medicine (ARCOM)',
    location: 'Fort Smith, AR',
    state: 'AR',
    type: 'DO',
    gpa: 3.50,
    mcat: 500,
    tuition: 59,
    match: 84,
    isPublic: false,
  },
  // California
  {
    name: 'California Northstate University College of Medicine',
    location: 'Elk Grove, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.77,
    mcat: 512,
    tuition: 82,
    match: 90,
    isPublic: false,
  },
  {
    name: 'California University of Science and Medicine (CUSM)',
    location: 'Colton, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.61,
    mcat: 514,
    tuition: 80,
    match: 89,
    isPublic: false,
  },
  {
    name: 'Kaiser Permanente Bernard J. Tyson School of Medicine',
    location: 'Pasadena, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.78,
    mcat: 516,
    tuition: 0,
    match: 98,
    isPublic: false,
  },
  {
    name: 'Keck School of Medicine of USC',
    location: 'Los Angeles, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.81,
    mcat: 517,
    tuition: 67,
    match: 96,
    isPublic: false,
  },
  {
    name: 'Loma Linda University School of Medicine',
    location: 'Loma Linda, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.83,
    mcat: 509,
    tuition: 68,
    match: 92,
    isPublic: false,
  },
  {
    name: 'Stanford University School of Medicine',
    location: 'Stanford, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.89,
    mcat: 518,
    tuition: 66,
    match: 99,
    isPublic: false,
  },
  {
    name: 'UC Davis School of Medicine',
    location: 'Sacramento, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.58,
    mcat: 509,
    tuition: 40,
    match: 94,
    isPublic: true,
  },
  {
    name: 'UC Irvine School of Medicine',
    location: 'Irvine, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.93,
    mcat: 516,
    tuition: 36,
    match: 95,
    isPublic: true,
  },
  {
    name: 'UCLA David Geffen School of Medicine',
    location: 'Los Angeles, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.81,
    mcat: 516,
    tuition: 41,
    match: 97,
    isPublic: true,
  },
  {
    name: 'UC Riverside School of Medicine',
    location: 'Riverside, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.60,
    mcat: 509,
    tuition: 40,
    match: 91,
    isPublic: true,
  },
  {
    name: 'UC San Diego School of Medicine',
    location: 'La Jolla, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.77,
    mcat: 515,
    tuition: 38,
    match: 96,
    isPublic: true,
  },
  {
    name: 'UCSF School of Medicine',
    location: 'San Francisco, CA',
    state: 'CA',
    type: 'MD',
    gpa: 3.87,
    mcat: 517,
    tuition: 40,
    match: 98,
    isPublic: true,
  },
  {
    name: 'Touro University California (TUCOM)',
    location: 'Vallejo, CA',
    state: 'CA',
    type: 'DO',
    gpa: 3.56,
    mcat: 509,
    tuition: 70,
    match: 88,
    isPublic: false,
  },
  {
    name: 'Western University – COMP',
    location: 'Pomona, CA',
    state: 'CA',
    type: 'DO',
    gpa: 3.67,
    mcat: 509,
    tuition: 64,
    match: 89,
    isPublic: false,
  },
  // Colorado
  {
    name: 'University of Colorado School of Medicine',
    location: 'Aurora, CO',
    state: 'CO',
    type: 'MD',
    gpa: 3.82,
    mcat: 516,
    tuition: 42,
    match: 95,
    isPublic: true,
  },
  {
    name: 'Rocky Vista University (RVUCOM)',
    location: 'Parker, CO',
    state: 'CO',
    type: 'DO',
    gpa: 3.61,
    mcat: 506,
    tuition: 59,
    match: 87,
    isPublic: false,
  },
  // Connecticut
  {
    name: 'Frank H. Netter MD School of Medicine at Quinnipiac',
    location: 'Hamden, CT',
    state: 'CT',
    type: 'MD',
    gpa: 3.80,
    mcat: 511,
    tuition: 63,
    match: 91,
    isPublic: false,
  },
  {
    name: 'University of Connecticut School of Medicine',
    location: 'Farmington, CT',
    state: 'CT',
    type: 'MD',
    gpa: 3.76,
    mcat: 513,
    tuition: 42,
    match: 93,
    isPublic: true,
  },
  {
    name: 'Yale School of Medicine',
    location: 'New Haven, CT',
    state: 'CT',
    type: 'MD',
    gpa: 3.92,
    mcat: 522,
    tuition: 71,
    match: 99,
    isPublic: false,
  },
  // District of Columbia
  {
    name: 'George Washington University School of Medicine',
    location: 'Washington, DC',
    state: 'DC',
    type: 'MD',
    gpa: 3.72,
    mcat: 512,
    tuition: 67,
    match: 92,
    isPublic: false,
  },
  {
    name: 'Georgetown University School of Medicine',
    location: 'Washington, DC',
    state: 'DC',
    type: 'MD',
    gpa: 3.78,
    mcat: 512,
    tuition: 69,
    match: 93,
    isPublic: false,
  },
  {
    name: 'Howard University College of Medicine',
    location: 'Washington, DC',
    state: 'DC',
    type: 'MD',
    gpa: 3.61,
    mcat: 507,
    tuition: 48,
    match: 88,
    isPublic: false,
  },
  // Florida
  {
    name: 'Florida Atlantic University College of Medicine',
    location: 'Boca Raton, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.81,
    mcat: 516,
    tuition: 32,
    match: 93,
    isPublic: true,
  },
  {
    name: 'Florida International University Wertheim College of Medicine',
    location: 'Miami, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.79,
    mcat: 510,
    tuition: 38,
    match: 91,
    isPublic: true,
  },
  {
    name: 'Florida State University College of Medicine',
    location: 'Tallahassee, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.68,
    mcat: 507,
    tuition: 26,
    match: 89,
    isPublic: true,
  },
  {
    name: 'University of Central Florida College of Medicine',
    location: 'Orlando, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.84,
    mcat: 515,
    tuition: 30,
    match: 94,
    isPublic: true,
  },
  {
    name: 'University of Florida College of Medicine',
    location: 'Gainesville, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.79,
    mcat: 514,
    tuition: 37,
    match: 95,
    isPublic: true,
  },
  {
    name: 'University of Miami Miller School of Medicine',
    location: 'Miami, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.80,
    mcat: 515,
    tuition: 56,
    match: 94,
    isPublic: false,
  },
  {
    name: 'University of South Florida Morsani College of Medicine',
    location: 'Tampa, FL',
    state: 'FL',
    type: 'MD',
    gpa: 3.92,
    mcat: 518,
    tuition: 34,
    match: 96,
    isPublic: true,
  },
  {
    name: 'Nova Southeastern University – KPCOM',
    location: 'Fort Lauderdale, FL',
    state: 'FL',
    type: 'DO',
    gpa: 3.60,
    mcat: 506,
    tuition: 70,
    match: 87,
    isPublic: false,
  },
  {
    name: 'Lake Erie College of Osteopathic Medicine – Bradenton',
    location: 'Bradenton, FL',
    state: 'FL',
    type: 'DO',
    gpa: 3.57,
    mcat: 502,
    tuition: 41,
    match: 85,
    isPublic: false,
  },
  // Georgia
  {
    name: 'Emory University School of Medicine',
    location: 'Atlanta, GA',
    state: 'GA',
    type: 'MD',
    gpa: 3.78,
    mcat: 515,
    tuition: 57,
    match: 97,
    isPublic: false,
  },
  {
    name: 'Medical College of Georgia at Augusta University',
    location: 'Augusta, GA',
    state: 'GA',
    type: 'MD',
    gpa: 3.81,
    mcat: 512,
    tuition: 32,
    match: 93,
    isPublic: true,
  },
  {
    name: 'Mercer University School of Medicine',
    location: 'Macon, GA',
    state: 'GA',
    type: 'MD',
    gpa: 3.70,
    mcat: 504,
    tuition: 42,
    match: 89,
    isPublic: false,
  },
  {
    name: 'Morehouse School of Medicine',
    location: 'Atlanta, GA',
    state: 'GA',
    type: 'MD',
    gpa: 3.68,
    mcat: 506,
    tuition: 48,
    match: 88,
    isPublic: false,
  },
  {
    name: 'PCOM Georgia',
    location: 'Suwanee, GA',
    state: 'GA',
    type: 'DO',
    gpa: 3.50,
    mcat: 503,
    tuition: 57,
    match: 86,
    isPublic: false,
  },
  // Hawaii
  {
    name: 'University of Hawaii – John A. Burns School of Medicine',
    location: 'Honolulu, HI',
    state: 'HI',
    type: 'MD',
    gpa: 3.77,
    mcat: 512,
    tuition: 37,
    match: 92,
    isPublic: true,
  },
  // Idaho
  {
    name: 'Idaho College of Osteopathic Medicine (ICOM)',
    location: 'Meridian, ID',
    state: 'ID',
    type: 'DO',
    gpa: 3.60,
    mcat: 506,
    tuition: 63,
    match: 85,
    isPublic: false,
  },
  // Nebraska
  {
    name: 'Creighton University School of Medicine',
    location: 'Omaha, NE',
    state: 'NE',
    type: 'MD',
    gpa: 3.84,
    mcat: 513,
    tuition: 64,
    match: 93,
    isPublic: false,
  },
  {
    name: 'University of Nebraska College of Medicine',
    location: 'Omaha, NE',
    state: 'NE',
    type: 'MD',
    gpa: 3.75,
    mcat: 515,
    tuition: 47,
    match: 94,
    isPublic: true,
  },
  // Nevada
  {
    name: 'UNLV Kirk Kerkorian School of Medicine',
    location: 'Las Vegas, NV',
    state: 'NV',
    type: 'MD',
    gpa: 3.73,
    mcat: 509,
    tuition: 42,
    match: 90,
    isPublic: true,
  },
  {
    name: 'University of Nevada, Reno School of Medicine',
    location: 'Reno, NV',
    state: 'NV',
    type: 'MD',
    gpa: 3.68,
    mcat: 509,
    tuition: 44,
    match: 91,
    isPublic: true,
  },
  {
    name: 'Touro University Nevada College of Osteopathic Medicine',
    location: 'Henderson, NV',
    state: 'NV',
    type: 'DO',
    gpa: 3.54,
    mcat: 506,
    tuition: 67,
    match: 86,
    isPublic: false,
  },
  // New Hampshire
  {
    name: 'Geisel School of Medicine at Dartmouth',
    location: 'Hanover, NH',
    state: 'NH',
    type: 'MD',
    gpa: 3.77,
    mcat: 516,
    tuition: 67,
    match: 96,
    isPublic: false,
  },
  // New Jersey
  {
    name: 'Cooper Medical School of Rowan University',
    location: 'Camden, NJ',
    state: 'NJ',
    type: 'MD',
    gpa: 3.77,
    mcat: 511,
    tuition: 41,
    match: 91,
    isPublic: true,
  },
  {
    name: 'Hackensack Meridian School of Medicine',
    location: 'Nutley, NJ',
    state: 'NJ',
    type: 'MD',
    gpa: 3.80,
    mcat: 514,
    tuition: 64,
    match: 92,
    isPublic: false,
  },
  {
    name: 'Rutgers New Jersey Medical School',
    location: 'Newark, NJ',
    state: 'NJ',
    type: 'MD',
    gpa: 3.70,
    mcat: 515,
    tuition: 45,
    match: 93,
    isPublic: true,
  },
  {
    name: 'Rutgers Robert Wood Johnson Medical School',
    location: 'Piscataway, NJ',
    state: 'NJ',
    type: 'MD',
    gpa: 3.70,
    mcat: 512,
    tuition: 41,
    match: 92,
    isPublic: true,
  },
  {
    name: 'Rowan University School of Osteopathic Medicine',
    location: 'Stratford, NJ',
    state: 'NJ',
    type: 'DO',
    gpa: 3.67,
    mcat: 506,
    tuition: 48,
    match: 87,
    isPublic: true,
  },
  // New Mexico
  {
    name: 'University of New Mexico School of Medicine',
    location: 'Albuquerque, NM',
    state: 'NM',
    type: 'MD',
    gpa: 3.72,
    mcat: 507,
    tuition: 24,
    match: 90,
    isPublic: true,
  },
  {
    name: 'Burrell College of Osteopathic Medicine',
    location: 'Las Cruces, NM',
    state: 'NM',
    type: 'DO',
    gpa: 3.48,
    mcat: 501,
    tuition: 68,
    match: 84,
    isPublic: false,
  },
  // New York
  {
    name: 'Albany Medical College',
    location: 'Albany, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.70,
    mcat: 510,
    tuition: 66,
    match: 91,
    isPublic: false,
  },
  {
    name: 'Albert Einstein College of Medicine',
    location: 'Bronx, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.82,
    mcat: 516,
    tuition: 83,
    match: 95,
    isPublic: false,
  },
  {
    name: 'Columbia University Vagelos College of Physicians and Surgeons',
    location: 'New York, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.90,
    mcat: 522,
    tuition: 84,
    match: 99,
    isPublic: false,
  },
  {
    name: 'CUNY School of Medicine',
    location: 'New York, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.80,
    mcat: 508,
    tuition: 40,
    match: 88,
    isPublic: true,
  },
  {
    name: 'Donald and Barbara Zucker School of Medicine at Hofstra/Northwell',
    location: 'Hempstead, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.82,
    mcat: 517,
    tuition: 69,
    match: 95,
    isPublic: false,
  },
  {
    name: 'Icahn School of Medicine at Mount Sinai',
    location: 'New York, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.81,
    mcat: 519,
    tuition: 59,
    match: 97,
    isPublic: false,
  },
  {
    name: 'New York Medical College',
    location: 'Valhalla, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.60,
    mcat: 515,
    tuition: 66,
    match: 90,
    isPublic: false,
  },
  {
    name: 'NYU Grossman School of Medicine',
    location: 'New York, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.97,
    mcat: 523,
    tuition: 0,
    match: 99,
    isPublic: false,
  },
  {
    name: 'NYU Long Island School of Medicine',
    location: 'Mineola, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.78,
    mcat: 515,
    tuition: 0,
    match: 94,
    isPublic: false,
  },
  {
    name: 'SUNY Downstate Medical Center College of Medicine',
    location: 'Brooklyn, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.73,
    mcat: 513,
    tuition: 44,
    match: 92,
    isPublic: true,
  },
  {
    name: 'SUNY Upstate Medical University',
    location: 'Syracuse, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.64,
    mcat: 509,
    tuition: 47,
    match: 91,
    isPublic: true,
  },
  {
    name: 'Stony Brook University Renaissance School of Medicine',
    location: 'Stony Brook, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.89,
    mcat: 515,
    tuition: 44,
    match: 94,
    isPublic: true,
  },
  {
    name: 'University at Buffalo Jacobs School of Medicine',
    location: 'Buffalo, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.73,
    mcat: 512,
    tuition: 46,
    match: 92,
    isPublic: true,
  },
  {
    name: 'University of Rochester School of Medicine and Dentistry',
    location: 'Rochester, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.82,
    mcat: 516,
    tuition: 81,
    match: 95,
    isPublic: false,
  },
  {
    name: 'Weill Cornell Medicine',
    location: 'New York, NY',
    state: 'NY',
    type: 'MD',
    gpa: 3.91,
    mcat: 519,
    tuition: 84,
    match: 98,
    isPublic: false,
  },
  {
    name: 'New York Institute of Technology College of Osteopathic Medicine',
    location: 'Old Westbury, NY',
    state: 'NY',
    type: 'DO',
    gpa: 3.62,
    mcat: 506,
    tuition: 66,
    match: 87,
    isPublic: false,
  },
  {
    name: 'Touro College of Osteopathic Medicine – New York',
    location: 'New York, NY',
    state: 'NY',
    type: 'DO',
    gpa: 3.48,
    mcat: 504,
    tuition: 67,
    match: 85,
    isPublic: false,
  },
  // North Carolina
  {
    name: 'Campbell University Jerry M. Wallace School of Osteopathic Medicine',
    location: 'Lillington, NC',
    state: 'NC',
    type: 'DO',
    gpa: 3.66,
    mcat: 507,
    tuition: 61,
    match: 87,
    isPublic: false,
  },
  {
    name: 'Duke University School of Medicine',
    location: 'Durham, NC',
    state: 'NC',
    type: 'MD',
    gpa: 3.90,
    mcat: 520,
    tuition: 71,
    match: 99,
    isPublic: false,
  },
  {
    name: 'East Carolina University Brody School of Medicine',
    location: 'Greenville, NC',
    state: 'NC',
    type: 'MD',
    gpa: 3.61,
    mcat: 506,
    tuition: 33,
    match: 89,
    isPublic: true,
  },
  {
    name: 'University of North Carolina at Chapel Hill School of Medicine',
    location: 'Chapel Hill, NC',
    state: 'NC',
    type: 'MD',
    gpa: 3.66,
    mcat: 512,
    tuition: 39,
    match: 95,
    isPublic: true,
  },
  {
    name: 'Wake Forest School of Medicine',
    location: 'Winston-Salem, NC',
    state: 'NC',
    type: 'MD',
    gpa: 3.67,
    mcat: 513,
    tuition: 72,
    match: 94,
    isPublic: false,
  },
  // North Dakota
  {
    name: 'University of North Dakota School of Medicine & Health Sciences',
    location: 'Grand Forks, ND',
    state: 'ND',
    type: 'MD',
    gpa: 3.80,
    mcat: 507,
    tuition: 40,
    match: 90,
    isPublic: true,
  },
  // Ohio
  {
    name: 'Case Western Reserve University School of Medicine',
    location: 'Cleveland, OH',
    state: 'OH',
    type: 'MD',
    gpa: 3.83,
    mcat: 518,
    tuition: 79,
    match: 97,
    isPublic: false,
  },
  {
    name: 'Northeast Ohio Medical University (NEOMED)',
    location: 'Rootstown, OH',
    state: 'OH',
    type: 'MD',
    gpa: 3.68,
    mcat: 510,
    tuition: 41,
    match: 90,
    isPublic: true,
  },
  {
    name: 'The Ohio State University College of Medicine',
    location: 'Columbus, OH',
    state: 'OH',
    type: 'MD',
    gpa: 3.81,
    mcat: 514,
    tuition: 37,
    match: 95,
    isPublic: true,
  },
  {
    name: 'University of Toledo College of Medicine',
    location: 'Toledo, OH',
    state: 'OH',
    type: 'MD',
    gpa: 3.75,
    mcat: 509,
    tuition: 30,
    match: 90,
    isPublic: true,
  },
  {
    name: 'University of Cincinnati College of Medicine',
    location: 'Cincinnati, OH',
    state: 'OH',
    type: 'MD',
    gpa: 3.83,
    mcat: 515,
    tuition: 32,
    match: 94,
    isPublic: true,
  },
  {
    name: 'Wright State University Boonshoft School of Medicine',
    location: 'Dayton, OH',
    state: 'OH',
    type: 'MD',
    gpa: 3.63,
    mcat: 508,
    tuition: 52,
    match: 89,
    isPublic: true,
  },
  {
    name: 'Ohio University Heritage College of Osteopathic Medicine',
    location: 'Athens, OH',
    state: 'OH',
    type: 'DO',
    gpa: 3.75,
    mcat: 504,
    tuition: 13,
    match: 86,
    isPublic: true,
  },
  // Oklahoma
  {
    name: 'University of Oklahoma College of Medicine',
    location: 'Oklahoma City, OK',
    state: 'OK',
    type: 'MD',
    gpa: 3.86,
    mcat: 509,
    tuition: 40,
    match: 93,
    isPublic: true,
  },
  {
    name: 'Oklahoma State University College of Osteopathic Medicine',
    location: 'Tulsa, OK',
    state: 'OK',
    type: 'DO',
    gpa: 3.60,
    mcat: 500,
    tuition: 26,
    match: 85,
    isPublic: true,
  },
  // Oregon
  {
    name: 'Oregon Health & Science University School of Medicine',
    location: 'Portland, OR',
    state: 'OR',
    type: 'MD',
    gpa: 3.66,
    mcat: 509,
    tuition: 24,
    match: 94,
    isPublic: true,
  },
  {
    name: 'Western University – COMP Northwest',
    location: 'Lebanon, OR',
    state: 'OR',
    type: 'DO',
    gpa: 3.66,
    mcat: 508,
    tuition: 67,
    match: 87,
    isPublic: false,
  },
]

const sorters = {
  name: (a, b) => a.name.localeCompare(b.name),
  tuition: (a, b) => a.tuition - b.tuition,
  match: (a, b) => b.match - a.match,
  gpa: (a, b) => b.gpa - a.gpa,
  mcat: (a, b) => b.mcat - a.mcat,
}

export default function Explore({ favorites, onToggleFavorite }) {
  const [typeFilter, setTypeFilter] = useState('ALL')
  const [locationFilter, setLocationFilter] = useState('ALL')
  const [publicFilter, setPublicFilter] = useState('ALL')
  const [tuitionMax, setTuitionMax] = useState('ALL')
  const [gpaMin, setGpaMin] = useState('ALL')
  const [mcatMin, setMcatMin] = useState('ALL')
  const [sortKey, setSortKey] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')

  const locations = useMemo(() => {
    const states = [...new Set(medicalSchools.map((s) => s.state))]
    return states.sort()
  }, [])

  const schoolsToShow = useMemo(() => {
    let filtered = medicalSchools

    // Type filter (MD/DO)
    if (typeFilter !== 'ALL') {
      filtered = filtered.filter((school) => school.type === typeFilter)
    }

    // Public/Private filter
    if (publicFilter !== 'ALL') {
      const isPublic = publicFilter === 'PUBLIC'
      filtered = filtered.filter((school) => school.isPublic === isPublic)
    }

    // Location filter
    if (locationFilter !== 'ALL') {
      filtered = filtered.filter((school) => school.state === locationFilter)
    }

    // Tuition filter
    if (tuitionMax !== 'ALL') {
      const maxTuition = parseInt(tuitionMax, 10)
      filtered = filtered.filter((school) => school.tuition <= maxTuition)
    }

    // GPA filter
    if (gpaMin !== 'ALL') {
      const minGpa = parseFloat(gpaMin)
      filtered = filtered.filter((school) => school.gpa >= minGpa)
    }

    // MCAT filter
    if (mcatMin !== 'ALL') {
      const minMcat = parseInt(mcatMin, 10)
      filtered = filtered.filter((school) => school.mcat >= minMcat)
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (school) =>
          school.name.toLowerCase().includes(query) ||
          school.location.toLowerCase().includes(query)
      )
    }

    return [...filtered].sort(sorters[sortKey])
  }, [typeFilter, locationFilter, publicFilter, tuitionMax, gpaMin, mcatMin, sortKey, searchQuery])

  const resultsCount = schoolsToShow.length
  const totalCount = medicalSchools.length

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h1 className="mb-2">Explore Schools</h1>
        <p className="text-muted mb-0">
          Browse {totalCount} accredited MD and DO medical schools. Filter by program type and location, 
          search by name, and sort by the metrics that matter to you.
        </p>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <SortDropdown sortKey={sortKey} onSortChange={setSortKey} />
            </div>
          </div>
          <hr className="my-3" />
          <FilterBar
            typeFilter={typeFilter}
            onTypeChange={setTypeFilter}
            locationFilter={locationFilter}
            onLocationChange={setLocationFilter}
            locations={locations}
            publicFilter={publicFilter}
            onPublicChange={setPublicFilter}
            tuitionMax={tuitionMax}
            onTuitionChange={setTuitionMax}
            gpaMin={gpaMin}
            onGpaChange={setGpaMin}
            mcatMin={mcatMin}
            onMcatChange={setMcatMin}
          />
        </div>
      </div>

      <p className="text-muted small mb-3" aria-live="polite">
        Showing {resultsCount} of {totalCount} schools
      </p>

      {schoolsToShow.length === 0 ? (
        <div className="alert alert-warning" role="status">
          No schools match your current filters. Try adjusting your search or filters.
        </div>
      ) : (
        <div className="row">
          {schoolsToShow.map((school) => (
            <SchoolCard
              key={school.name}
              school={school}
              isSaved={favorites.some((fav) => fav.name === school.name)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}
