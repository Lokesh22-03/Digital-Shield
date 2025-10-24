import React from 'react';
const tips = [
  "Do: Use privacy settings on all social accounts.",
  "Do: Report suspicious profiles immediately.",
  "Don't: Share personal info (address, phone) on public profiles.",
  "Don't: Respond to harassment or stalkers.",
];
export default function SafetyTips() {
  return (
    <div>
      <h2>Digital Safety Do's & Don'ts</h2>
      <ul>
        {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
      </ul>
    </div>
  );
}
