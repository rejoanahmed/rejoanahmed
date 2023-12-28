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
import HoverCard from './HoverCard';

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
        <ImageListItem key={item.img ?? item.comp}>
          <Paper
            elevation={3}
            className="duration-3 overflow-hidden rounded-xl transition hover:shadow-2xl"
          >
            <HoverCard>
              <div className="z-10">
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
                  sx={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.6) 0%, ' +
                      'rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)'
                  }}
                  actionIcon={
                    item.href ? (
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                      >
                        <Link
                          href={item.href || ''}
                          target="_blank"
                          className="hover:animate-ping"
                        >
                          <NorthEastIcon />
                        </Link>
                      </IconButton>
                    ) : null
                  }
                />
              </div>
            </HoverCard>
          </Paper>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
