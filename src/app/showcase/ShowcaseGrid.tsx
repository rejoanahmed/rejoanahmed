'use client';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ShowCaseGrid({ data }: { data: any[] }) {
  const matchesXS = useMediaQuery('(max-width:600px)');

  let cols;
  if (matchesXS) {
    cols = 1;
  } else {
    cols = 2;
  }
  return (
    <ImageList variant="masonry" cols={cols}>
      {data.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=848&fit=crop&auto=format`}
            alt={item.title}
            layout="responsive"
            objectFit="cover"
            width={248}
            height={248}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.description ?? ''}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Link href={item.href || ''} target="_blank">
                  <NorthEastIcon />
                </Link>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
