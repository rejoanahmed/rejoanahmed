import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

console.log('directory', __dirname);
const devlogDirectory = __dirname;
async function getPostData(id: string) {
  const fullPath = path.join(devlogDirectory, `/${id}/page.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Combine the data with the id and contentHtml
  return matterResult;
}
async function page() {
  // get all posts
  const posts = fs.readdirSync(devlogDirectory);
  console.log('posts', posts);
  return (
    <div>
      {posts.map(async (post, index) => {
        // const postData = await getPostData(post);
        return <div key={index}>hello</div>;
      })}
    </div>
  );
}

export default page;
