// Template used for the Contact-Us page.

import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components'


export const _queryPage = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
				sidebar
			}
			html
		}
	}
`


export default function ContactPageTemplate({ data }) {
	const page = data.markdownRemark
	const sidebar = page.frontmatter.sidebar

	return (
		<Layout title={page.frontmatter.title} withSidebar={sidebar}>

			<h1>{page.frontmatter.title}</h1>
			<p>{page.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{
				__html: page.html,
			}} />

		</Layout>
	)
}
