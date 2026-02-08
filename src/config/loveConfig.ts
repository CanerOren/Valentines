// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Meleth",
  partnerName: "Meleth",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2025-07-28T00:00:00+08:00",
  
  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "Benim Güzel Sevgilime",
  heroSubtext: "Senin için, birlikte geçirdiğimiz her kahkahayı, her macerayı ve paylaştığımız her kalp atışını kutlayan, anılarımızın içinden geçen bir yolculuk.",
  
  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 9,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "İlk Buluşmamız",
      date: "28 Temmuz 2025",
      description: "Colin's'in önünde beklerken bir anda bana nasıl sarıldığını ve Bavyerada başını omzuma koyuşunu asla unutamıyorum."
    },
    {
      title: "Sana Aldığım İlk Çiçek ve Kordon",
      date: "29 Temmuz 2025",
      description: "Sürprizlerle dolu bir gün. Sen beni Adlib'e götürmüştün ben sana ilk çiçeğini almıştım. Ağladığını öğrendiğimde çok üzülmüştüm. Kordonda gün batımını izlememiz ve sana sarılıp elini tutmak çok güzeldi."
    },
    {
      title: "Doğum Günün",
      date: "17 Ağustos 2025",
      description: "Beraber kutladığımız ilk doğum günün. Hala sana pasta almayı unuttuğum için kendime kızıyorum. Seni ilk kez bugün öpmüştüm. Beraber kutlayacağımız nice doğum günlerine."
    },
    {
      title: "Bizimkilerle Tanışman",
      date: "19 Temmuz 2025",
      description: "HIMYM'deki bar gibi olan Bavyera'da bizimkilerle tanışırkenki gerginliğin çok komikti."
    },
    {
      title: "Ceza Konseri",
      date: "1 Eylül 2025",
      description: "Seninle beraber gittiğimiz ilk konser."
    },
    {
      title: "SoloTürk",
      date: "9 Eylül 2025",
      description: "İlk defa SoloTürk'ü izlemiştim o da seninle olmuştu."
    },
    {
      title: "İlk Sergimiz",
      date: "4 Ekim 2025",
      description: "Seninle beraber gittiğimiz ilk sergi. Ayrıca babanın arkadaşına yakalandığımızdan dolayı çok gerilmiştim."
    },
    {
      title: "Bostanlı",
      date: "25 Ekim 2025",
      description: "Yıllar sonra Bostanlı'ya ilk gidişimiz. Evka3 metroda elimde çiçekle teyzene yakalanmamak için ne yapacağımı şaşırmıştım. Sonunda çok darladığım mantıcıya seni götürmüştüm."
    },
    {
      title: "Kutlu Doğum Haftası",
      date: "6 Aralık 2025",
      description: "05lisinden 97lisine uzanan kalabalık kutlamada bana o mükemmel plağı vermiştin. Tabi önceden ağzından kaçırmıştın."
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "canerorenn@gmail.com", // Replace with your actual email
  emailSubject: "Merhaba",
  emailBody: "Güzel sevgilim merhaba nasılsın? Bu mailin sana ulaşacağından oldukça eminim ve umarım bunu görünce çok mutlu olursun :,). Anısı olduğunu için sana buradan yazıyorum, ayriyeten bence artık yazma işlerinden de anlıyorum. Seni her şeyden çok ama çok seviyorum. Bu maili fark ettiğindeki tepkini görmek için buraya telefon numaramı da yazmama gerek yok. Seni her şeyden çok seviyorum.  💕",
  
  // === INVITE DETAILS ===
  inviteTitle: "Benimle Bir Ömür Beraber Olur musun?",
  inviteMessage: "",
  inviteDate: "8 Ocak 2025",
  inviteTime: "Sonsuza Kadar",
  inviteLocation: "Senin olduğun herhangi bir yer",
};

export default loveConfig;
