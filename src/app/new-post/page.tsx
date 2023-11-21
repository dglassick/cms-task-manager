'use client';

import { Box, Heading, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { generateNewPost } from '../_actions/newPost';

type Inputs = {
    title: string;
    subtitle: string;
    postbody: string;
}

const NewPost = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        generateNewPost(data)
    }

    // function generateMD (data: Inputs) {
    //     var fileName = data.title.toLowerCase().split(" ").join("") + '-' + new Date().toUTCString();
    //     var fileContents = `---
    //   title: "${data.title}"
    //   subtitle: "${data.subtitle}"
    //   layout: Page
    //   ---
    //   ${data.postbody}
    //   `
    //     var outputPath = path.join(__dirname, '../content/md', `${fileName}.md`)
      
    //     fs.writeFile(outputPath, fileContents, function (err) {
    //       if (err) {
    //         return console.log(err)
    //       }
    //       console.log(outputPath + ' file generated')
    //     })
    //   }

    console.log(watch("postbody"))

    return (
        <Box>
            <Heading>New Post</Heading>

            <form method='post' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <Input placeholder="Title" {...register("title")} />
                {errors.title && <span>This field is required</span>}
                {/* include validation with required or other standard HTML validation rules */}
                <Input placeholder='Subtitle' {...register("subtitle", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.subtitle && <span>This field is required</span>}

                <Textarea placeholder='Post Body. Markdown acceptable :)' {...register('postbody')} />

                <input type="submit" />
            </form>
        </Box>
    )
}

export default NewPost