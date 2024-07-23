// custom_items.js

StartupEvents.registry('item', event => {
  const items = [
    { id: 'neural_interface', name: 'Neural Interface', description: 'Allows direct control of cybernetic systems.', color: 'blue' },
    { id: 'optic_enhancer', name: 'Optic Enhancer', description: 'Enhances visual perception with augmented reality overlays.', color: 'yellow' },
    { id: 'synthetic_heart', name: 'Synthetic Heart', description: 'Ensures enhanced endurance and vitality.', color: 'red' },
    { id: 'cyber_arm', name: 'Cyber Arm', description: 'Engineered for strength and precision.', color: 'gray' },
    { id: 'digital_retina', name: 'Digital Retina', description: 'Improves vision clarity.', color: 'cyan' },
    { id: 'power_core', name: 'Power Core', description: 'Boosts energy reserves.', color: 'purple' },
    { id: 'hyper_legs', name: 'Hyper-Legs', description: 'Grants superhuman speed.', color: 'green' },
    { id: 'nano_skin', name: 'Nano Skin', description: 'Provides superior protection.', color: 'gold' },
    { id: 'bio_optic_eye', name: 'Bio-Optic Eye', description: 'Enhances visual acuity.', color: 'aqua' },
    { id: 'mech_jaw', name: 'Mech Jaw', description: 'Increases bite force and vocal abilities.', color: 'dark_red' },
    { id: 'data_hub', name: 'Data Hub', description: 'Centralizes all cybernetic data processing.', color: 'blue' },
    { id: 'impulse_booster', name: 'Impulse Booster', description: 'Increases reaction time.', color: 'orange' },
    { id: 'mind_link', name: 'Mind Link', description: 'Connects to external networks.', color: 'light_purple' },
    { id: 'nano_bloodstream', name: 'Nano-Bloodstream', description: 'Enhances bodily functions at the cellular level.', color: 'red' },
    { id: 'cybernetic_spine', name: 'Cybernetic Spine', description: 'Provides superior structural support.', color: 'gray' },
    { id: 'sensory_module', name: 'Sensory Module', description: 'Enhances sensory perception.', color: 'yellow' },
    { id: 'holo_display_arm', name: 'Holo-Display Arm', description: 'Projects holographic displays.', color: 'blue' },
    { id: 'bio_skeleton', name: 'Bio-Skeleton', description: 'Reinforces the entire skeletal structure.', color: 'white' },
    { id: 'pulse_enhancer', name: 'Pulse Enhancer', description: 'Boosts bio-electric pulse efficiency.', color: 'purple' },
    { id: 'cybernetic_hand', name: 'Cybernetic Hand', description: 'Grants enhanced dexterity and strength.', color: 'dark_gray' },
    { id: 'augment_brain_chip', name: 'Augment Brain Chip', description: 'Increases cognitive functions.', color: 'green' },
    { id: 'giga_ear', name: 'Giga Ear', description: 'Enhances auditory perception.', color: 'blue' },
    { id: 'plasma_pulse_arm', name: 'Plasma Pulse Arm', description: 'Shoots plasma pulses.', color: 'red' },
    { id: 'techno_core', name: 'Techno Core', description: 'Enhances all-around performance.', color: 'gold' },
    { id: 'nano_weave_muscle', name: 'Nano-Weave Muscle', description: 'Increases physical strength.', color: 'green' },
    { id: 'augment_shield', name: 'Augment Shield', description: 'Provides an energy shield.', color: 'light_purple' },
    { id: 'pulse_wrist', name: 'Pulse Wrist', description: 'Enhances pulse accuracy.', color: 'blue' },
    { id: 'cortex_connector', name: 'Cortex Connector', description: 'Connects multiple cybernetic devices.', color: 'gray' },
    { id: 'hyper_vision_lens', name: 'Hyper-Vision Lens', description: 'Grants telescopic vision.', color: 'cyan' },
    { id: 'servo_motor_arm', name: 'Servo Motor Arm', description: 'Increases arm strength.', color: 'dark_gray' },
    { id: 'synthetic_lungs', name: 'Synthetic Lungs', description: 'Enhances respiratory efficiency.', color: 'red' },
    { id: 'virtual_assistant_node', name: 'Virtual Assistant Node', description: 'Provides a virtual assistant.', color: 'yellow' },
    { id: 'bio_feedback_system', name: 'Bio-Feedback System', description: 'Monitors and optimizes bodily functions.', color: 'green' },
    { id: 'quantum_interface', name: 'Quantum Interface', description: 'Connects to quantum networks.', color: 'purple' },
    { id: 'hydraulic_limbs', name: 'Hydraulic Limbs', description: 'Grants superhuman strength.', color: 'dark_red' },
    { id: 'energy_converter', name: 'Energy Converter', description: 'Converts bio-energy to cyber-energy.', color: 'blue' },
    { id: 'augmented_nervous_system', name: 'Augmented Nervous System', description: 'Enhances neural connections.', color: 'light_purple' },
    { id: 'mech_tendons', name: 'Mech Tendons', description: 'Increases tendon strength.', color: 'gray' },
    { id: 'cyber_brain', name: 'Cyber Brain', description: 'Enhances brain functions.', color: 'dark_gray' },
    { id: 'nano_processor', name: 'Nano-Processor', description: 'Increases processing speed.', color: 'gold' }
  ];

  items.forEach(item => {
    const itemBuilder = event.create(`skylore:${item.id}`)
      .displayName(item.name)
      .tooltip([{"text": item.name, "color": item.color}, {"text": "\n" + item.description, "color": "white"}])
      .texture(`skylore:item/${item.id}`);
  });
});


