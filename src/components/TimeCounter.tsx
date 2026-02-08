'use client';

import { useEffect, useState } from 'react';
import loveConfig from '@/config/loveConfig';
import styles from './TimeCounter.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimeCounter() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      // Parse the relationship start date (Singapore timezone)
      const startDate = new Date(loveConfig.relationshipStart);
      const now = new Date();
      
      // Calculate difference in milliseconds
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className={styles.counterSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>⏰</div>
          <h2 className={styles.title}>Paylaştığımız Süre</h2>
          <p className={styles.subtitle}>
            Seninle geçirdiğim her saniye en büyük hazine
          </p>

          <div className={styles.counterGrid}>
            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{timeLeft.days}</div>
              <div className={styles.timeLabel}>Gün</div>
              <div className={styles.timeIcon}>📅</div>
            </div>

            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{timeLeft.hours}</div>
              <div className={styles.timeLabel}>Saat</div>
              <div className={styles.timeIcon}>🕐</div>
            </div>

            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{timeLeft.minutes}</div>
              <div className={styles.timeLabel}>Dakika</div>
              <div className={styles.timeIcon}>⏱️</div>
            </div>

            <div className={styles.timeBox}>
              <div className={styles.timeValue}>{timeLeft.seconds}</div>
              <div className={styles.timeLabel}>Saniye</div>
              <div className={styles.timeIcon}>⚡</div>
            </div>
          </div>

          <p className={styles.message}>
            Ve daha nicelerine! Birlikte sonsuz daha fazla ana…💕
          </p>
        </div>
      </div>
    </section>
  );
}
