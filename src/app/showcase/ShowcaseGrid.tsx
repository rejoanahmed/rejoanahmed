'use client';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Paper } from '@mui/material';

export default function ShowCaseGrid({ data }: { data: any[] }) {
  const matchesXS = useMediaQuery('(max-width:900px)');

  let cols;
  if (matchesXS) {
    cols = 1;
  } else {
    cols = 2;
  }

  return (
    <ImageList variant="masonry" cols={cols} gap={16}>
      {data.map((item) => (
        <ImageListItem
          key={item.img ?? item.comp}
          sx={{
            '&': {
              padding: 0,
              overflow: 'hidden'
            }
          }}
        >
          <Paper elevation={3}>
            {item.img ? (
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={`${item.img}?w=848&fit=crop&auto=format`}
                  alt={item.title}
                  objectFit="cover"
                  objectPosition="top"
                  loading="lazy"
                  fill
                  className="my-0"
                />
              </div>
            ) : (
              <div className="flex justify-center px-4 py-20">
                <item.comp />
              </div>
            )}
            <ImageListItemBar
              title={item.title}
              subtitle={item.description ?? ''}
              actionIcon={
                item.href ? (
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <Link href={item.href || ''} target="_blank">
                      <NorthEastIcon />
                    </Link>
                  </IconButton>
                ) : null
              }
            />
          </Paper>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
