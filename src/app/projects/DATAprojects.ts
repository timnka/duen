export type Semester = 'Fall 2022' | 'Spring 2023' | 'Fall 2023' | 'Spring 2024' | 'Fall 2024' | 'Spring 2025' | 'Fall 2025'

export interface ProjectLink {
  label: string
  url: string
}

export interface TimelineEntry {
  date: string
  description: string
}

export interface Challenge {
  problem: string
  solution: string
}

export interface Project {
  slug: string
  title: string
  semester: Semester
  cohortName?: string
  shortDescription: string
  description: string
  imagePath?: string
  /** Path to team photo in public/projects/ */
  teamImagePath?: string
  teamMembers?: string[]
  softwareUsed?: string[]
  timeline?: TimelineEntry[]
  /** Design & manufacturing / process notes */
  designProcess?: string[]
  challenges?: Challenge[]
  /** Materials list or cost summary */
  materials?: string[]
  cost?: string
  /** How to use / operate (from manuals) */
  userGuide?: string[]
  /** Maintenance notes (from manuals) */
  maintenance?: string[]
  links?: ProjectLink[]
  highlights?: string[]
}

/** Display label for semester (full name e.g. "Spring 2023") */
export function semesterShortLabel(semester: Semester): string {
  return semester
}

export const projects: Project[] = [
  {
    slug: 'advertising-rover',
    title: 'DUEN Advertising Rover',
    semester: 'Fall 2022',
    shortDescription: 'Rover with LED strip and flag for tabling and recruiting at the MU.',
    description: 'The Fall 2022 cohort designed and assembled a rover that advertises DUEN at tabling events. It uses an ELEGOO Conqueror Robot Tank base with a 3D-printed weather protection shell and flag holder, LED strip with cascading pattern (Arduino + power bank), and a laminated DUEN flag. The rover supports line-tracking, obstacle-avoidance, and auto-follow modes via remote or phone app.',
    imagePath: '/projects/RoverAdvertise.jpeg',
    teamMembers: ['Richmond Ballesteros', 'Sherri Chandra', 'Lauren Gee', 'Abubakr Hadwan', 'Matthew Suyetani'],
    softwareUsed: ['Solidworks', 'Arduino'],
    timeline: [
      { date: 'Nov 3', description: 'Preliminary construction; main components assembled.' },
      { date: 'Nov 4', description: 'Dimensioned top covering with micrometer; completed CAD for weather protection and flag holder in Solidworks.' },
      { date: 'Nov 5', description: 'Finalized rover parts; tested movement paths and modes.' },
      { date: 'Nov 8', description: 'Gathered power components (breadboard, LEDs, resistors, power bank); dimensions for fit.' },
      { date: 'Nov 9', description: 'Coding, user manual, flag component, CAD drawings; camera biaxial bracket fixes.' },
      { date: 'Nov 10', description: 'Attached weather protector/flag holder; realigned connections; strengthened frame; instruction manual and slides.' },
      { date: 'Nov 11', description: 'Debugged LED code; mounted table to rover; finalized presentation and user manual.' },
    ],
    designProcess: [
      'Rover: ELEGOO Conqueror Robot Tank base; dual-channel DRV8835 driver, 7.4 V lithium pack, IR tracking. Dimensions (mm): 178.5 × 127 × 123; weight 1.64 kg.',
      'CAD shell (weather protection): 163.68 × 134.03 × 10 mm. Legs 85 mm height. LED strip 330 mm. Flagpole 546.1 mm. Flag 177.8 × 157.48 mm.',
      'CAD: Multiple iterations designed, dimensioned, manufactured; testing fit; attached to rover.',
      'Flagpole: CAD design; switched to wooden pole after issues with 3D-printed version.',
      'LED strip: Circuit between power bank, Arduino, and LED; cascading pattern; fitted onto rover.',
      'Flag: Design sketch, member approval, printing and lamination.',
    ],
    challenges: [
      { problem: 'CAD dimensioning errors and 3D printer inaccuracy (hole dimensions).', solution: 'Iterated CAD; switched flagpole to wood.' },
      { problem: 'Flag printing and lamination issues.', solution: 'Adjusted design and process.' },
      { problem: 'Electrical wiring and circuitry.', solution: 'Breadboard and careful wiring; LED circuit with switch.' },
    ],
    materials: ['ELEGOO Conqueror Robot Tank Set', 'PLA (3D printing)', 'Power bank', 'LED strip', 'Breadboard', 'Wooden flagpole', 'Double-sided tape'],
    userGuide: [
      'Startup: Plug USB wires into power bank (underside), press power bank button for LEDs. Toggle on/off on battery pack (left side). Use remote or phone to control.',
      'Modes: (1) Line-tracking – circular line mat, press 1 on remote or phone. (2) Obstacle-avoidance – press 2. (3) Auto-follow – press 3; follows obstacle within 20 cm or rotates 90° L/R then stops. (4) Infrared remote – arrow keys and 1–3 for modes.',
      'Battery: LED power bank charges via micro-USB; green LED while charging, off when complete. Rover battery life ~2 hours in line-tracking. Clear ~2 ft around rover before first power-on (sensors initialize, tracks move briefly).',
    ],
    maintenance: [
      'Keep rover off high surfaces when powered. Disconnect power when working with electricity. Do not forcibly rotate servo by hand while power is on. Low battery can cause WiFi disconnect and camera stuck.',
    ],
    links: [
      { label: 'Project presentation (PDF)', url: '/projects/F23 project.pdf' },
      { label: 'Instruction manual (PDF)', url: '/projects/DUEN Instruction Manual F23.pdf' },
    ],
    highlights: [
      'ELEGOO Conqueror Robot Tank base',
      'Line-tracking, obstacle-avoidance, auto-follow modes',
      'LED strip with Arduino, 3D-printed shell and flag holder',
      'Phone or remote control',
      'DUEN flag for visibility at tabling',
    ],
  },
  {
    slug: 'air-hockey-table',
    title: 'Air Hockey Table with Score Board',
    semester: 'Spring 2023',
    shortDescription: 'Air hockey table with an integrated score board.',
    description: 'The Spring 2023 cohort built an air hockey table with a score board for DUEN tabling and events.',
    imagePath: '/projects/AirHockeyTeam.jpeg',
    teamImagePath: '/projects/AirHockeyTeam.jpeg',
    highlights: ['Air hockey table', 'Integrated score board'],
  },
  {
    slug: 'airplane-launcher',
    title: 'Airplane Launcher',
    semester: 'Fall 2023',
    shortDescription: 'Interactive airplane launcher project.',
    description: 'The Fall 2023 cohort designed and built an airplane launcher as their cohort project for DUEN tabling and recruitment events. The project gave members hands-on experience in design and manufacturing.',
    imagePath: '/projects/airplaneLauncher.jpeg',
    teamImagePath: '/projects/AirplaneLauncherTeam.jpeg',
    highlights: ['Airplane launcher', 'Interactive demo', 'Fall 2023 cohort build'],
  },
  {
    slug: 'drink-dispenser',
    title: 'DUEN Drink Dispenser (DDD)',
    semester: 'Spring 2024',
    cohortName: 'Lil Maxies',
    shortDescription: 'App-controlled drink dispenser with peristaltic pump and motorized valves, built by the Lil Maxies cohort.',
    description: 'The Spring 2024 cohort "Lil Maxies" built the DUEN Drink Dispenser (DDD), a wooden drink dispenser controlled via a React web app. Users place a cup under the dispenser, navigate to the website, input their cup volume, select from available drinks (Water, Apple Juice, Cranberry Juice, Lemonade), choose percentage splits, and click Dispense. An Arduino Uno R4 WiFi receives the request and triggers motorized ball valves and a peristaltic pump to dispense the exact drink blend. The wooden casing was custom-built using a table saw, wood glue, and drilled holes for tubing and wiring.',
    imagePath: '/projects/DuenDrinkDispenser.png',
    teamImagePath: '/projects/DDDTeam.jpeg',
    softwareUsed: ['React', 'Arduino IDE', 'CAD (SolidWorks)'],
    timeline: [
        { date: 'Apr 21', description: 'Brainstorm week — introduced to construction project, brainstormed proposals and presented three ideas.' },
        { date: 'Apr 28', description: 'Planning and designing — cohort started planning and designing after construction project was revealed.' },
        { date: 'May 5', description: 'Planning and buying materials — began purchasing materials.' },
        { date: 'May 12', description: 'Constructing project — cohort began constructing the final build to present on May 18th.' },
    ],
    designProcess: [
        'Prototyping: Drew and edited blueprints based on design needs and component sizes. Built cardboard prototype to finalize dimensions, focusing on functionality and portability.',
        'CAD Modeling: Designed electronic box, railings for glass and wood slide, and nosal for tube. Updated designs for electronics safety and pump mounting.',
        'Woodworking: Cut wood using table saw based on prototype dimensions. Assembled with wood glue. Drilled holes through shelves for tubing and electrical wires.',
        'Electronics: Arduino Uno R4 WiFi integrated with React web app via built-in WiFi. 12V power supply stepped down to 5V via buck converter. 8-channel relay controls valves and pump. Flyback diodes protect against back-EMF.',
        'Water system: Peristaltic pump at 500ml/min moves liquid through silicone tubing and Y-shaped connectors. Motorized ball valves control drink selection. Tubes heated with hairdryer for secure connections.',
        'App/Website: React web app allows users to input cup volume, select drinks, choose percentage splits (25/50/75/100%), and dispense. Confirmation screen shown after successful dispense.',
    ],
    challenges: [
        { problem: 'Total spending of $507.51 exceeded the $450 budget.', solution: 'Pursued returns on eligible items, bringing effective cost to $444.15 — $5.85 under budget after refunds.' },
        { problem: 'Electronics at risk of liquid splash from tubing.', solution: 'Positioned the electronic board away from splash zones; used careful mounting and routing.' },
        { problem: 'Securing silicone tubing to connectors.', solution: 'Used a hairdryer to heat and expand tubes for a tight, secure fit onto barbed adapters.' },
    ],
    materials: [
        '4 Motorized Ball Valves',
        '12V Power Supply',
        'Wood',
        'Peristaltic Pump',
        'Arduino Uno R4 WiFi',
        'Barbed Adapters',
        '4-Pack Containers',
        'Buck Converter (12V to 5V)',
        '8-Channel Relay',
        'Silicone Tubing',
        'Y-Shaped Connectors',
        'Flyback Diodes',
        'Killswitch',
        'Breadboard',
        'Wood Glue',
    ],
    cost: '$444.15',
    userGuide: [
        'Ensure your cup is placed under the dispenser nozzle.',
        'Navigate to the website on your phone or device.',
        'Input the volume of your cup (in ml) and click Go.',
        'Select your desired drink(s) from the available options: Water, Apple Juice, Cranberry Juice, or Lemonade.',
        'Choose your desired fill percentage (25%, 50%, 75%, or 100%). Multiple drinks can be selected with percentage splits.',
        'Click "Dispense" to begin. Wait for the confirmation screen: "Your drink has been successfully dispensed!"',
        'Enjoy your beverage! Click "Make another drink" to start over.',
    ],
    highlights: [
        'App-controlled dispensing via React website and Arduino Uno R4 WiFi',
        'Peristaltic pump at 500ml/min with motorized ball valves for precise drink selection',
        'Supports drink blending with user-defined percentage splits',
        'Custom wood casing with CAD-designed electronic enclosure',
        'Completed within budget ($444.15 of $450 after refunds)',
    ],
  }, 
  {
    slug: 'card-shuffler-dealer',
    title: 'Card Shuffler and Dealer',
    semester: 'Fall 2024',
    cohortName: 'Cash Money',
    shortDescription: 'Portable, battery-powered card shuffler and dispenser for tabling and recruitment events.',
    description: 'The Fall 2024 cohort team Cash Money designed and built a Card Shuffler & Dispenser for DUEN tabling and recruitment. The device works with a variable number of players and cards, supports different card sizes, and is intuitive to use and debug. It is portable, battery-powered, and backpack-sized. Cards are shuffled and dispensed within 30 seconds, with an interface to control number of players, number of cards, and other variables. The design incorporates DUEN colors and logo and stays within the $500 budget.',
    imagePath: '/projects/cardShuffler.jpeg',
    softwareUsed: ['Solidworks (officer support)', '3D printing', 'Soldering', 'Arduino'],
    materials: ['LED strips', 'Walnut boards', 'Waterproofing sprays', 'Jumper cables', 'Sensors', 'Arduino', 'Breadboards'],
    links: [
      { label: 'Project overview & requirements (PDF)', url: '/projects/Fall 2024 Construction Project_ Card Shuffler & Dispenser.pdf' },
    ],
    highlights: [
      'Variable players and cards, different card sizes',
      'Portable, battery-powered, backpack-sized',
      'Shuffle and dispense in 30 seconds',
      'Control interface for players, cards, etc.',
      'DUEN branding and aesthetics',
    ],
  },
  {
    slug: 'windtrax',
    title: 'Windtrax',
    semester: 'Spring 2025',
    shortDescription: 'Smart fan with person-tracking and evaporative cooling to reduce energy use and carbon footprint.',
    description: 'Windtrax is a fan that tracks the closest person in the room and rotates to follow them while blowing cool air. It uses an IMX708 Arducam with a Raspberry Pi and YOLO for real-time person detection. Cooling is provided by a DURA-COOL evaporative pad: the pad is soaked in distilled water and frozen, so Windtrax blows cool air. The fan turns off when no one is detected, saving electricity. The system includes a 775 12V DC motor and NEMA 17 stepper motor, 3D-printed PLA parts, and a Bluetooth app.',
    imagePath: '/projects/Windtrax.jpeg',
    teamImagePath: '/projects/WindtraxTeam.jpeg',
    softwareUsed: ['Python', 'YOLO (Ultralytics)', 'gpiozero', 'Raspberry Pi OS', 'Picamera2', 'Bluetooth app'],
    designProcess: [
      'Mechanical: 775 12V DC motor, NEMA 17 stepper, custom motor brackets, 3D-printed PLA (black). Exposed cooling reservoir, translucent side panels.',
      'Cooling: DURA-COOL evaporative pad in compartment behind fan intake; submerged in distilled water before use; airflow through pad for phase-change cooling.',
      'Electronics: Raspberry Pi 5, Arducam Camera Module 3, DROK 12V-to-5V buck converter, 12V 30A 360W power supply. 10 AWG and 18 AWG wire, ring connectors, velcro and zip ties.',
      'Software: YOLOv8n (Ultralytics) for person detection; gpiozero for stepper (TMC2209 driver); deadzone to reduce jitter; reset to center when no person detected.',
    ],
    challenges: [
      { problem: 'Raspberry Pi 5 overheating during tracking.', solution: 'Active cooling: heatsink with miniature fan over processor.' },
      { problem: 'Power instability when both motors active.', solution: 'Upgraded to 12V 30A power supply; 6-way fuse box for distribution and safety.' },
      { problem: 'Arducam failing to initialize on boot; tracking jitter at frame edge.', solution: 'Startup delay; resolution matched to camera; deadzone in center to prevent overcorrection.' },
    ],
    materials: ['775 DC Motor 12V', 'BTS7960 motor driver', 'NEMA 17 Stepper (x2)', 'GT2 Timing Belt', 'DuraCool pad', '6-way 12V Fuse Box', '12V 30A 360W Power Supply', 'TMC2209 Stepper Driver', 'DROK Buck Converter', '10 AWG / 18 AWG wire', 'Ring terminals', 'Orange Pi Zero 3 / USB camera (alternates)', 'Raspberry Pi 5', 'Arducam Module 3'],
    cost: '$73.95',
    userGuide: [
      'Get started: Submerge blue evaporative cooling pad in distilled water → place in rear panel slot → snap in. Download WindTrax app.',
      'Connect: Turn Bluetooth ON → Open WindTrax App → Scan for Devices → Select "windtrax" → Pair when prompted.',
      'Pad replacement: Wet pad with distilled water, wring lightly; insert into cartridge; slide cartridge into shroud slot. After use, remove and wring pad; store extra saturated pads in freezer for better results.',
      'Power off: Turn off in app → flip red switch on base → unplug → leave pad to dry before storing.',
    ],
    maintenance: [
      'Use distilled water for the cooling pad to prevent mold. When not in use for 1+ week, dry the pad and place in rear panel slot.',
    ],
    links: [
      { label: 'Instruction manual (PDF)', url: '/projects/_Windtrax Design Project Instruction Manual- Spring 25.pdf' },
    ],
    highlights: [
      'Person tracking with YOLO and Arducam on Raspberry Pi',
      'DURA-COOL evaporative cooling pad (frozen, distilled water)',
      'Turns off when room is empty to save energy',
      'Bluetooth app for on/off and speed',
      '3D-printed PLA body, 775 DC + NEMA 17 stepper motors',
    ],
  },
  {
    slug: 'duen-tabling-machine',
    title: 'DUEN Tabling Machine (DTM)',
    semester: 'Fall 2025',
    cohortName: 'Nonchalant Hustlers',
    shortDescription: 'Interactive arcade-style machine with Flappy Bird game and prize wheel for DUEN tabling.',
    description: 'The Fall 2025 cohort "Nonchalant Hustlers" built the DUEN Tabling Machine (DTM) to engage students at tabling. Players stand in front and raise both arms to start a Flappy Bird–style game; arm movements are tracked via Raspberry Pi 5 AI Camera and Google MediaPipe Pose. Passing through 5 pipes triggers a physical prize wheel (rigged mode). Flyers are dispensed via a rack-and-pinion tray; a motorized door retracts. Compact, portable chassis with handles and removable plexiglass back.',
    imagePath: '/projects/DTM.png',
    softwareUsed: ['Python', 'Google MediaPipe Pose', 'Raspberry Pi OS', 'Make'],
    timeline: [
      { date: 'Nov 7', description: 'First presentation (objectives, demo, technical teams, budget, next phase).' },
    ],
    designProcess: [
      'Exterior: Custom 3D-printed plates with DUEN logo; PLA for external, PETG for load-bearing parts.',
      'Electronics: Raspberry Pi 5 (CPU), ribbon cables to AI camera, 12V rechargeable lithium battery, aluminum heatsink, breadboard, SD card.',
      'Flyer dispenser: Rack and pinion; gear on motor engages rack on tray bottom; tray extends/retracts. Door retracts via string and spindle.',
      'Game: MediaPipe Pose—flap_up (wrists above shoulders), flap_down (wrists below elbows); 30 FPS, detection every 5 frames. Rigged wheel with 8 outcomes (sticker, candy, flyer).',
    ],
    challenges: [
      { problem: 'Camera placement for different user heights.', solution: 'Camera placed horizontally for wider arm/shoulder detection; optional stand/sit for very short/tall users.' },
      { problem: 'Flyer mechanism: string-wound tray had winding concerns.', solution: 'Switched to rack-and-pinion sliding tray for reliable extend/retract.' },
      { problem: 'Battery unreliable in some positions; power varies with load.', solution: 'Careful transportation; stabilize wires; consider future power solution.' },
    ],
    materials: ['Raspberry Pi 5 (8GB)', 'AI Camera', 'Ribbon cables', 'LCD Screen', '12V Battery', 'SD Card', 'Heatsink', 'Breadboards', 'Stepper motors (x3)', 'Stepper drivers (x3)', 'Buck converter', 'PLA/PETG filament', 'Plexiglass', 'Nuts/bolts', 'String', 'Buttons', 'Fuse box'],
    cost: '$477.92',
    userGuide: [
      'How to play: Turn on and connect WiFi. Stand in front of camera, ~5 steps back (closest person is tracked). Raise both arms above head to start; game begins in 3 seconds. Move arms up/down to navigate pipes. Pass 3 pipes to win.',
      'Emergency shutoff: Press red Emergency Shutoff button; motors stop immediately. Manually return tray, door, and wheel to original position.',
      'Transport: Keep machine upright. Support bottom with one hand and one wall, or both hands on bottom with back against chest. Avoid touching screen. Place down upright so parts stay in place.',
      'Do not: Expose to water (short circuit risk). Touch circuitry unsupervised. Let someone else step in front of camera (tracking will switch).',
    ],
    maintenance: [
      'Check wire connections. Check internals for shorts, damage, or heat damage. Replace door string if needed. Re-glue parts if they lift. Clean exterior and dust interior. Re-print parts if cracking. Keep cables tight. Touch up paint if worn.',
    ],
    links: [
      { label: 'Project website', url: 'https://jytingy.github.io/duen_website/' },
      { label: 'First presentation (PDF)', url: '/projects/F25 First Presentation - November 7.pdf' },
      { label: 'Instruction manual (PDF)', url: '/projects/F25 Tabling Assistant Instruction Manual.pdf' },
    ],
    highlights: [
      'Flappy Bird controlled by arm pose (MediaPipe on Raspberry Pi 5)',
      'Physical prize wheel (rigged mode), flyer dispenser with rack and pinion',
      'Portable chassis, removable back for maintenance',
      'Emergency shutoff, 36–40 in recommended table height',
      'Raspberry Pi 5, AI camera, 12V battery, 3D-printed PLA/PETG',
    ],
  },
]

const semesterOrder: Semester[] = ['Spring 2023', 'Fall 2023', 'Spring 2024', 'Fall 2024', 'Spring 2025', 'Fall 2025']

export function getProjectsBySemester(): Record<Semester, Project[]> {
  const grouped: Record<string, Project[]> = {}
  semesterOrder.forEach(s => { grouped[s] = [] })
  projects.forEach(p => {
    grouped[p.semester].push(p)
  })
  return grouped as Record<Semester, Project[]>
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
