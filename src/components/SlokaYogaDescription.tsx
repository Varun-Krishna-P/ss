import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { useAppConfig } from '../hooks/useAppConfig';

function SlokaYogaDescription() {
  const {site_name} = useAppConfig();
  return (
    <Box sx={{ p: 2 }}>
      <List sx={{ listStyleType: 'none', paddingLeft: 0 }}>
        {/* Our Essence */}
        <ListItem sx={{ display: 'block' }}>
          <Typography variant="h6" component="div">✨ <strong>Our Essence</strong></Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>
              At <strong>{site_name}</strong>, we believe that true wellness begins with balance — of breath, sound, and movement.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Through the power of mantra (sound) and the discipline of yoga (body and breath), we guide you on a transformative journey toward inner peace, clarity, and strength.
            </ListItem>
          </List>
        </ListItem>

        {/* What We Offer */}
        <ListItem sx={{ display: 'block', mt: 2 }}>
          <Typography variant="h6" component="div">🕉️ <strong>What We Offer</strong></Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <strong>Sloka Training:</strong> Learn the pronunciation, meaning, and spiritual essence of sacred Sanskrit slokas. Each chant opens a doorway to calmness, devotion, and deeper self-awareness.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <strong>Yoga Sessions:</strong> Experience traditional yoga sequences that connect breath, posture, and mindfulness. Perfect for beginners and advanced practitioners alike.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <strong>Integrated Wellness Programs:</strong> Combine sloka chanting with yoga and meditation for a holistic path to well-being — a union of sound, body, and soul.
            </ListItem>
          </List>
        </ListItem>

        {/* Why Join Us */}
        <ListItem sx={{ display: 'block', mt: 2 }}>
          <Typography variant="h6" component="div">🌸 <strong>Why Join Us</strong></Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <em>“Chant. Breathe. Transform.”</em> — Awaken your energy through vibration and movement.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <em>“Ancient Sounds for Modern Souls.”</em> — Reconnect with timeless wisdom to find peace in today’s world.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <em>“Move with Grace, Speak with Power, Live with Presence.”</em> — A mantra for your journey within.
            </ListItem>
          </List>
        </ListItem>

        {/* Our Mission */}
        <ListItem sx={{ display: 'block', mt: 2 }}>
          <Typography variant="h6" component="div">🌼 <strong>Our Mission</strong></Typography>
          <List sx={{ pl: 3 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <em>To make the ancient teachings of yoga and sloka accessible to everyone — bridging tradition and modern life, helping each individual rediscover the stillness within and the strength beyond.</em>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default SlokaYogaDescription;
