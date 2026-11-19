// EDIT ME: to add a video, drop the file in /public/videos and add an entry here.
// src: '/videos/your-file.mp4'  |  poster: '/images/your-thumb.svg' (or .jpg/.png)
// The files below are placeholders and do not exist yet; the player will say so.
export const categories = ['All', 'Motion Graphics', 'Cinematic Edits', 'Social Media Reels', 'Typography Animation', 'AI-generated Videos', 'Explainer Videos']
const v = (id, title, category, description) => ({ id, title, category, description, src: `/videos/${id}.mp4`, poster: '/images/video-placeholder.svg' })
export const videos = [
  v('motion-01', 'Motion Graphics Sample', 'Motion Graphics', 'Placeholder: replace with your motion graphics piece.'),
  v('cinematic-01', 'Cinematic Edit Sample', 'Cinematic Edits', 'Placeholder: replace with a cinematic edit.'),
  v('reel-01', 'Reel Sample', 'Social Media Reels', 'Placeholder: replace with a short-form reel.'),
  v('type-01', 'Typography Animation Sample', 'Typography Animation', 'Placeholder: replace with a kinetic type piece.'),
  v('ai-01', 'AI Video Sample', 'AI-generated Videos', 'Placeholder: replace with an AI-generated video.'),
  v('explainer-01', 'Explainer Sample', 'Explainer Videos', 'Placeholder: replace with an explainer.'),
]
