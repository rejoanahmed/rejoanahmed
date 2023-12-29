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
import { useAtomValue } from 'jotai';
import { filterAtom } from './state';
import { Filters } from '../constants';
import { motion } from 'framer-motion';

export default function ShowCaseGrid({ data }: { data: any[] }) {
  const matchesXS = useMediaQuery('(max-width:900px)');

  let cols;
  if (matchesXS) {
    cols = 1;
  } else {
    cols = 2;
  }

  const filters = useAtomValue(filterAtom);

  if (filters.length > 0 && !filters.includes('All')) {
    data = data.filter((item) => {
      if (item.tags) {
        return item.tags.some((tag: (typeof Filters)[number]) =>
          filters.includes(tag)
        );
      }
      return false;
    });
  }

  return (
    <ImageList
      // component={motion.div}
      // layout
      variant="masonry"
      cols={cols}
      gap={16}
    >
      {data.map((item) => (
        <ImageListItem component={motion.div} key={item.img ?? item.comp}>
          <Paper
            elevation={1}
            className={`duration-3 overflow-hidden rounded-xl grayscale-0 hover:shadow-md ${
              item.href ? 'cursor-pointer' : ''
            }`}
          >
            <div className="z-10">
              {item.img ? (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={`${item.img}?w=848&fit=crop&auto=format`}
                    alt={item.title}
                    fill
                    className="my-0 object-cover object-top"
                    priority
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
                    'linear-gradient(to top, rgba(0,0,0,0.4) 0%, ' +
                    'rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 100%)',
                  backdropFilter: 'blur(5px)'
                }}
                actionIcon={
                  item.href ? (
                    <IconButton
                      sx={{
                        color: 'rgba(255, 255, 255, 0.54)',
                        width: '3rem',
                        height: '3rem',
                        '&:hover': {
                          background: 'gray'
                        }
                      }}
                      aria-label={`info about ${item.title}`}
                    >
                      <Link
                        href={item.href || ''}
                        target="_blank"
                        className="hover:animate-ping"
                      >
                        <NorthEastIcon color="secondary" />
                      </Link>
                    </IconButton>
                  ) : null
                }
              />
            </div>
          </Paper>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
