import { v4 as randomUUID } from 'uuid';

type TrackProps = {
  id: string;
  name: string;
  artists: {
    name: string;
    url: string;
  }[];
  albumImage: string;
  url: string;
};

export const tracks: TrackProps[] = [
  {
    id: randomUUID(),
    name: 'O bem',
    artists: [
      {
        name: 'Arlindo Cruz',
        url: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      },
    ],
    albumImage: '',
    url: 'https://open.spotify.com/track/5NmL2zxnlt9GiTB2TQbvFM?si=0c8a533167684540',
  },
  {
    id: randomUUID(),
    name: 'Tá escrito',
    artists: [
      {
        name: 'Gruporevelação',
        url: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      },
    ],
    albumImage: '',
    url: 'https://open.spotify.com/track/1v7L65Lzy0j0vdpRjJewt1?si=e15fc07cfe5a4440',
  },
  {
    id: randomUUID(),
    name: 'Tempo',
    artists: [
      {
        name: 'Mc kako',
        url: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      },
    ],
    albumImage: '',
    url: 'https://open.spotify.com/track/1jo3TwNGCXfNdB5uba3ZVv?si=8b4f68d0eda241ee',
  },
  {
    id: randomUUID(),
    name: 'Céu Acul',
    artists: [
      {
        name: 'Charlie Brown Junior',
        url: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      },
    ],
    albumImage: '',
    url: 'https://open.spotify.com/track/23wfXwnsPZYe5A1xXRHb3J?si=8ca0b9259a174574',
  },
  {
    id: randomUUID(),
    name: 'Eu sou sentimento',
    artists: [
      {
        name: 'Luan Pereira',
        url: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR',
      },
    ],
    albumImage: '',
    url: 'https://open.spotify.com/track/5eGEc27nnhtmcOh6RC890a?si=35aa287f1de44bef',
  },
];
