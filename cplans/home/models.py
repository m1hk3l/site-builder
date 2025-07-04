from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.images.models import Image
from wagtail.admin.panels import FieldPanel


class HomePage(Page):
    blogger_photo = models.ForeignKey(
        'wagtailimages.Image',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
        help_text="Photo of the blogger for the landing page."
    )
    main_heading = models.CharField(
        max_length=255,
        help_text="Main heading (h1) for the landing page."
    )
    landing_text = RichTextField(
        features=None,  # None means all features enabled
        help_text="Landing page text with full rich text support.",
        default=""
    )

    content_panels = Page.content_panels + [
        FieldPanel('blogger_photo'),
        FieldPanel('main_heading'),
        FieldPanel('landing_text'),
    ]
